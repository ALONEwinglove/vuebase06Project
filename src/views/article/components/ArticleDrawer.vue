<script setup>
import { Plus } from '@element-plus/icons-vue'
import { ref } from 'vue';
import ArticleSelect from './ArticleSelect.vue';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { articleAddService, articleGetServive, articleUpdateService } from '@/api/article';
import { BASE_URL } from '@/utils/request';
import axios from 'axios';
// 文章-抽屉显示
const drawerflag = ref(false);
// 图片的本地显示——本地路由
const pictureurl = ref('');
// 文章内容
const articledefault = {
    title: '',
    cate_id: '',
    cover_img: '', //图片文件file文件
    content: '',
    state: ''
}
const articlecontent = ref({
    ...articledefault
});
// 控制抽屉方法
const editorquill = ref();
const open = async (article) => {
    drawerflag.value = true;
    console.log("articledrawer", article);
    if (article.id) {
        articlecontent.value = { ...article };
        const res = await articleGetServive(article.id);
        console.log("ArticleDrawer-res", res);
        articlecontent.value = res.data.data;
        pictureurl.value = BASE_URL + articlecontent.value.cover_img;
        // 网络图片转换
        const file = await urlToFile(pictureurl.value, articlecontent.value.cover_img);
        articlecontent.value.cover_img = file;
    } else {
        articlecontent.value = { ...articledefault }
        pictureurl.value = '';
        editorquill.value.setHTML('');
    }
}
// 基于axios，如何将网络图片地址转换成file对象
async function urlToFile(url, fileName) {
    try {
        // 1. 使用 axios 获取图片数据和响应头
        const response = await axios.get(url, {
            responseType: 'arraybuffer', // 确保获取二进制数据
        });

        // 2. 从响应头中获取 MIME 类型
        const mimeType = response.headers['content-type'];

        // 3. 将图片数据转换为 Blob 对象
        const blob = new Blob([response.data], { type: mimeType });

        // 4. 将 Blob 对象转换为 File 对象
        const file = new File([blob], fileName, { type: mimeType });

        return file;
    } catch (error) {
        console.error('Error converting URL to File:', error);
        throw error;
    }
}
// 图片上传功能

const onChangeimgfile = (uploadfile) => {
    console.log("ArticleDrawer", uploadfile);
    // 本地文件预览路经的创建
    pictureurl.value = URL.createObjectURL(uploadfile.raw);
    // 文件绑定用于上传
    articlecontent.value.cover_img = uploadfile.raw;
}
// 文章提交（添加和编辑）功能
const emit = defineEmits(['success']);
const onPublish = async (statex) => {
    articlecontent.value.state = statex;
    const fd = new FormData();
    for (let key in articlecontent.value) {
        fd.append(key, articlecontent.value[key])
    }
    console.log("ArticleDrawer", fd);

    // 不同的提交
    if (articlecontent.value.id) {
        console.log("编辑文章");
        await articleUpdateService(fd)
        ElMessage.success("修改成功");
        drawerflag.value = false;
        emit('success', 'edit');
    } else {
        console.log("添加文章");
        await articleAddService(fd);
        ElMessage.success("添加成功");
        drawerflag.value = false;
        emit('success', 'add');
    }
}
defineExpose({
    open
})
</script>
<template>
    <el-drawer v-model="drawerflag" direction="rtl" size="50%" :title="articlecontent.id ? '编辑文章' : '添加文章'">
        <el-form label-width="120px">
            <el-form-item label="文章标题:">
                <el-input v-model="articlecontent.title"></el-input>
            </el-form-item>
            <el-form-item label="文章分类:">
                <ArticleSelect v-model="articlecontent.cate_id"></ArticleSelect>
            </el-form-item>
            <el-form-item label="文章封面:">
                <!-- 图片上传——图片预览 -->
                <el-upload :auto-upload="false" :on-change="onChangeimgfile" class="avatar-uploader"
                    :show-file-list="false">
                    <el-image v-if="pictureurl" :src="pictureurl" fit="scale-down" class="avatar"></el-image>
                    <el-icon v-else class="avatar-uploader-icon">
                        <Plus />
                    </el-icon>
                </el-upload>
                <!-- <div class="upload-container">
                    <el-upload :auto-upload="false" :on-change="onChangeimgfile">
                        <el-image v-if="pictureurl" :src="pictureurl" fit="scale-down"></el-image>
                        <el-icon v-else class="avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>
                </div> -->
            </el-form-item>
            <el-form-item label="文章内容:">
                <div class="editor">
                    <quill-editor ref="editorquill" theme="snow" v-model:content="articlecontent.content"
                        content-type="html"></quill-editor>
                </div>

            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onPublish('已发布')">发布</el-button>
                <el-button type="info" @click="onPublish('草稿')">草稿</el-button>
            </el-form-item>
        </el-form>
    </el-drawer>
</template>
<style lang="scss" scoped>
.editor {
    width: 100%;

    :deep(.ql-editor) {
        min-height: 100px;
    }
}

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
<!-- :deep() {
    .avatar {
        width:178px;
        height:178px;
        display:block;
    }
    .el-upload {
        border: 1px dashed var(--el-border-color);
        border-radius: 6px;
        currsor: pointer;
        position: relative;
        overflow: hidden;
        transition: var(--el-transition-duration-fast);
    }
    .el-upload:hover {
        boder-color: var(--el-color-primary);
    }
    .el-icon.avatar-uploader-icon {
        font-size: 20px;
        color: #8c939d;
        width:178px;
        height:178px;
        text-align:center;
    }
} -->