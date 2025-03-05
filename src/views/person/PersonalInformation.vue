<script setup>
import PageContainer from '@/components/PageContainer.vue';
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { useUserStore } from '@/stores';
import { userUpdateInformation } from '@/api/user';

// 表单引用
const formRef = ref(null);

const {user:{ username, nickname, email, id }, getUser} = useUserStore();
// 表单数据
const form = ref({
   username,
   nickname,
   email,
   id
});

// 表单校验规则
const rules = reactive({
   nickname: [
      { required: true, message: '昵称不能为空', trigger: 'blur' },
      { pattern: /^\S{2,10}$/, message: '昵称长度必须为2到10位', trigger: 'blur' },
   ],
   email: [
      { required: true, message: '邮箱不能为空', trigger: 'blur' },
      {
         type: 'email',
         message: '请输入正确的邮箱格式',
         trigger: ['blur', 'change'],
      },
   ],
});

// 表单提交
const submitForm = async () => {
      await formRef.value.validate();
      const res = await userUpdateInformation(form.value);
      if (res.code === 200) {
         ElMessage.success('修改成功');
      } else {
         ElMessage.error('修改失败');
      }
      getUser();
}
</script>
<template>
   <PageContainer title="个人信息">

      <template #default>
         <el-form ref="formRef" :model="form" :rules="rules" label-width="100px" class="demo-form">
            <!-- 第一行：登录名称（禁用） -->
            <el-form-item label="登录名称" prop="username">
               <el-input v-model="form.username" disabled />
            </el-form-item>

            <!-- 第二行：用户昵称 -->
            <el-form-item label="用户昵称" prop="nickname">
               <el-input v-model="form.nickname" placeholder="请输入用户昵称" />
            </el-form-item>

            <!-- 第三行：用户邮箱 -->
            <el-form-item label="用户邮箱" prop="email">
               <el-input v-model="form.email" placeholder="请输入用户邮箱" />
            </el-form-item>

            <!-- 第四行：提交按钮 -->
            <el-form-item>
               <el-button type="primary" @click="submitForm">提交修改</el-button>
            </el-form-item>
         </el-form>
      </template>
   </PageContainer>
</template>
<style scoped>
.demo-form {
  max-width: 500px;
  margin: 20px auto;
}
</style>