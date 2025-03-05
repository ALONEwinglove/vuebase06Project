<script setup>
import { Edit, Delete } from '@element-plus/icons-vue'
import { ref } from 'vue';
import { articleGetClassService, articleDeleteClassService } from '@/api/article';
import ChannelEdit from './components/ChannelEdit.vue';
// 加载渲染
const loadingfalg = ref(false);
// 页面初始获取分类信息
const classList = ref([]);
const getclassList = async () => {
    loadingfalg.value = true;
    const res = await articleGetClassService();
    classList.value = res.data.data;
    loadingfalg.value = false;
    console.log(classList.value);
}
getclassList();

// 文章——自定义管理
// 弹窗控制
const dialog = ref();
// 添加
const onaddChannel = () => {
    dialog.value.open({});
}
// 编辑
const onEditChannel = (row, index) => {
    dialog.value.open(row);
};
// 删除
const onDeleteChannel = async (row, index) => {
    await ElMessageBox.confirm('确认删除','温馨提示',{
        type: 'warning',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
    });
    await articleDeleteClassService(row.id);
    ElMessage.success('删除成功');
    getclassList();
};
// 刷新页面
const onSuccess = () => {
    getclassList();
};
</script>
<template>
    <page-container title="文章分类">
        <template #button>
            <el-button type="primary" @click="onaddChannel()">添加分类</el-button>
        </template>

        <el-table :data="classList" width="100%" v-loading="loadingfalg">
            <el-table-column type="index" label="序号" width="100"></el-table-column>
            <el-table-column prop="cate_name" label="分类名称"></el-table-column>
            <el-table-column prop="cate_alias" label="分类别名"></el-table-column>
            <el-table-column label="操作">
                <!-- 自定义列 -->
                <template #default="difinecol">
                    <el-button type="primary" :icon="Edit" circle plain
                        @click="onEditChannel(difinecol.row, difinecol.$index)"></el-button>
                    <el-button type="danger" :icon="Delete" circle plain
                        @click="onDeleteChannel(difinecol.row, difinecol.$index)"></el-button>
                </template>

            </el-table-column>
            <!-- 空状态描述 -->
            <template>
                <el-empty description="description" />
            </template>
        </el-table>

        <!-- 对话框——弹窗 -->
         <ChannelEdit ref="dialog" @success="onSuccess()"></ChannelEdit>
    </page-container>
</template>
<style scoped></style>