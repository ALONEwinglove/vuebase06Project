<script setup>
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { userUpdatePasswordService } from '@/api/user';
import { useUserStore } from '@/stores';
import { useRouter } from 'vue-router';

// 表单数据
const pwdForm = ref({
    old_pwd: '', // 原密码
    new_pwd: '', // 新密码
    re_pwd: '', // 确认密码
});

// 表单校验规则
const validateNewPwd = (rule, value, callback) => {
    if (value === pwdForm.value.old_pwd) {
        callback(new Error('原密码和新密码不能相同'));
    } else {
        callback();
    }
};

const validateRePwd = (rule, value, callback) => {
    if (value !== pwdForm.value.new_pwd) {
        callback(new Error('新密码和确认密码必须相同'));
    } else {
        callback();
    }
};

const rules = reactive({
    old_pwd: [
        { required: true, message: '原密码不能为空', trigger: 'blur' },
        { min: 6, max: 15, message: '密码长度必须为6到15位', trigger: 'blur' },
    ],
    new_pwd: [
        { required: true, message: '新密码不能为空', trigger: 'blur' },
        { min: 6, max: 15, message: '密码长度必须为6到15位', trigger: 'blur' },
        { validator: validateNewPwd, trigger: 'blur' },
    ],
    re_pwd: [
        { required: true, message: '确认密码不能为空', trigger: 'blur' },
        { min: 6, max: 15, message: '密码长度必须为6到15位', trigger: 'blur' },
        { validator: validateRePwd, trigger: 'blur' },
    ],
});

// 表单引用
const pwdFormRef = ref(null);

// 提交表单
const userStore = useUserStore();
const router = useRouter();
const submitForm = async () => {
    await pwdFormRef.value.validate();
    await userUpdatePasswordService(pwdForm.value);
    ElMessage.success('密码修改成功');
    // 重新登陆
    // 清空本地存储信息
    userStore.setToken('');
    userStore.setUser({});

    router.push('/login');
};

// 重置表单
const resetForm = () => {
    pwdFormRef.value.resetFields();
};
</script>
<template>
    <page-container title="重置密码">
        <template #default>
            <el-form ref="pwdFormRef" :model="pwdForm" :rules="rules" label-width="100px" class="demo-form">
                <!-- 第一行：原密码 -->
                <el-form-item label="原密码" prop="old_pwd">
                    <el-input v-model="pwdForm.old_pwd" type="password" placeholder="请输入原密码" show-password />
                </el-form-item>

                <!-- 第二行：新密码 -->
                <el-form-item label="新密码" prop="new_pwd">
                    <el-input v-model="pwdForm.new_pwd" type="password" placeholder="请输入新密码" show-password />
                </el-form-item>

                <!-- 第三行：确认密码 -->
                <el-form-item label="确认密码" prop="re_pwd">
                    <el-input v-model="pwdForm.re_pwd" type="password" placeholder="请确认新密码" show-password />
                </el-form-item>

                <!-- 第四行：按钮 -->
                <el-form-item>
                    <el-button type="primary" @click="submitForm">修改密码</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </template>
    </page-container>
</template>
<style scoped>
.demo-form {
    max-width: 500px;
    margin: 20px auto;
}
</style>