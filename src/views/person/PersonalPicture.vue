<script setup>
import { Plus, Upload } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useUserStore } from '@/stores';
import { userUpdateAvatarService } from '@/api/user';

const userStore = useUserStore();
const pictureurl = ref(userStore.user.user_pic);

const uploadRef = ref();
const onSelectPicture = (file) => {
    // pictureurl.value = URL.createObjectURL(file.raw);
    // 基于fileReader 读取图片做预览
    const reader = new FileReader();
    reader.readAsDataURL(file.raw);
    reader.onload = () => {
        pictureurl.value = reader.result;
        console.log(pictureurl.value);
    }
    // 上传图片
    // userStore.uploadPicture(file.raw).then(() => {
    //     userStore.getUserInfo();
    // });
};
const onUpdate = async () => {
    await userUpdateAvatarService(pictureurl.value);
    await userStore.getUser();
    ElMessage.success('更新成功');
}

</script>
<template>
    <page-container title="更换头像">
        <template #default>
            <el-upload ref="uploadRef" :auto-upload="false" :on-change="onSelectPicture" :show-file-list="false">
                <el-image v-if="pictureurl" :src="pictureurl" class="avatar" fit="scale-down" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>
            <br />
            <el-button @click="uploadRef.$el.querySelector('input').click(); console.log(uploadRef.$el)" type="primary" :icon="Plus" size="small">选择图片</el-button>
            <el-button @click="onUpdate" type="success" :icon="Upload" size="small">上传头像</el-button>
        </template>
    </page-container>
</template>
<style scoped>
:deep() {
    .avatar {
        width: 158px;
        height: 158px;
        display: block;
    }

    .el-upload {
        border: 1px dashed var(--el-border-color);
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: var(--el-transition-duration-fast);
    }

    .el-upload:hover {
        border-color: var(--el-color-primary);
    }

    .el-icon.avatar-uploader-icon {
        font-size: 20px;
        color: #8c939d;
        width: 158px;
        height: 158px;
        text-align: center;
    }
}
</style>
    