<script setup>
import { ref } from 'vue';
import { articleAddClassService, articleEditClassService } from '@/api/article'
// 弹窗控制
const dialogVisible = ref(false);
// 对话框变化
const formdialog = ref({
    cate_name: '',
    cate_alias: ''
});
// 表单数据校验规则
const rules = {
    cate_name: [
        { required: true, message: '分类名称不能为空', trigger: 'blur' },
        { pattern: /^\S{1,10}$/, message: '分类名称必须为1到10位的非空字符', trigger: 'blur' }
    ],
    cate_alias: [
        { required: true, message: '分类别名不能为空', trigger: 'blur' },
        { pattern: /^[a-zA-Z0-9]{1,10}$/, message: '分类名称必须为1到10位的字母或数字', trigger: 'blur' }
    ]
};
// 文章编辑取消
const onCancle = () => {
    formdialog.value = {
        cate_name: '',
        cate_alias: ''
    };
    dialogVisible.value = false;
};
// 文章分类信息提交
const formRef = ref();
const emit = defineEmits(['success']);
const onSubmit = async () => {
    await formRef.value.validate();
    const isEdit = formdialog.value.id;
    if (isEdit) {
        await articleEditClassService(formdialog.value);
        ElMessage.success(('编辑成功'));
    } else {
        await articleAddClassService(formdialog.value);
        ElMessage.success(('添加成功'));
    }
    // 关闭对话窗
    dialogVisible.value = false;
    // 刷新
    emit('success');
};
// 组件暴露方法——判断弹窗类型
const open = (obj) => {
    formdialog.value = { ...obj };
    dialogVisible.value = true;
};
defineExpose({
    open
});
</script>
<template>
    <!-- 对话框——弹窗 -->
    <el-dialog v-model="dialogVisible" :title="formdialog.id ? '编辑分类' : '添加分类'" width="500">
        <!-- 渲染表单 -->
        <el-form ref="formRef" :model="formdialog" :rules="rules" label-width="100px">
            <el-form-item label="分类名称" prop="cate_name">
                <el-input placeholder="请输入分类名称" v-model="formdialog.cate_name"></el-input>
            </el-form-item>
            <el-form-item label="分类别名" prop="cate_alias">
                <el-input placeholder="请输入分类别名" v-model="formdialog.cate_alias"></el-input>
            </el-form-item>
        </el-form>

        <template #footer>
            <div class="dialog-footer">
                <el-button @click="onCancle()">取消</el-button>
                <el-button type="primary" @click="onSubmit()">
                    确认
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>