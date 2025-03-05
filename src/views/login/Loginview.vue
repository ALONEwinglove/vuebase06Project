<script setup>
import { User, Lock, Right } from '@element-plus/icons-vue';
import { ref, watch } from 'vue';
import { userRegisterService, userLoginSerice } from '@/api/user';
import { useUserStore } from '@/stores';
import { useRouter } from 'vue-router';
// 登录和注册页面的切换
let LoginOfRe = ref(true);
const ChangeLoginOfRe = () => {
    LoginOfRe.value = !LoginOfRe.value;
}
// 表单数据绑定和校验
// 注册表单信息数据绑定
const regesterForm = ref({
    username: '',
    password: '',
    repassword: ''
})
//切换清空表单
watch(LoginOfRe, () => {
    regesterForm.value = {
        username: '',
        password: '',
        repassword: ''
    }
})
// 校验规则
const rules = {
    username: [
        { required: true, message: "请输入用户名", trigger: 'blur' },
        { min: 5, max: 10, message: '用户长度必须为5到10位', trigger: 'blur' }
    ],
    password: [
        { required: true, message: "请输入密码", trigger: 'blur' },
        { pattern: /^\S{6,15}$/, message: '密码必须是6-15位的空字符', trigger: 'blur' }
    ],
    repassword: [
        { required: true, message: "请输入密码", trigger: 'blur' },
        { pattern: /^\S{6,15}$/, message: '密码必须是6-15位的空字符', trigger: 'blur' },
        {
            validator: (rule, value, callback) => {
                if (value !== regesterForm.value.password) {
                    callback(new Error("密码输入不一致"))
                } else {
                    callback()
                }
            }, trigger: 'blur'
        }
    ]
}
// 提交表单时的预校验
const form = ref();
const register = async () => {
    await form.value.validate();
    const res = await userRegisterService(regesterForm.value)
    console.log("开始注册", res);

    if (res && res.data.code != 1) {
        ElMessage({
            message: '注册成功',
            type: 'success',
        })
        LoginOfRe.value = !LoginOfRe.value
    }
}
const userStore = useUserStore()
const router = useRouter()
// 登录的预校验和处理登录成功的token
// 存储令牌和路由跳转
const login = async () => {
    try {
        await form.value.validate();
        const res = await userLoginSerice(regesterForm.value)
        console.log("开始登录", res);
        if (res && res.data && res.data.token) { 
            userStore.setToken(res.data.token)
            router.push('/layout')
        }
    } catch (error) {
        console.error("登录失败1:", error);
        ElMessage({
            message: '登录失败x，请检查网络或稍后重试',
            type: 'error',
        });
    }
}
</script>
<template>
    <el-row class="logindiv">
        <el-col :span="12" class="login-pic">
            <!-- logo -->
        </el-col>
        <el-col :span="6" :offset="3" class="login-page">
            <el-form ref="form" :model="regesterForm" :rules="rules" label-width="auto" v-if="LoginOfRe">
                <el-form-item>
                    <h1>登录</h1>
                </el-form-item>
                <el-form-item label="用户名：" prop="username">
                    <el-input v-model="regesterForm.username" :prefix-icon="User" placeholder="请输入账号">
                    </el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input type="password" v-model="regesterForm.password" :prefix-icon="Lock" placeholder="请输入密码">
                    </el-input>
                </el-form-item>

                <el-form-item class="login-page-setting">
                    <el-checkbox>记住我</el-checkbox>
                    <a href="">忘记密码</a>
                </el-form-item>


                <el-form-item class="login-page-submit">
                    <el-button @click="login">登录</el-button>
                </el-form-item>

                <el-form-item class="login-page-login">
                    <el-link type="info" @click="ChangeLoginOfRe()">
                        注册→
                    </el-link>
                </el-form-item>
            </el-form>


            <el-form ref="form" :model="regesterForm" :rules="rules" label-width="auto" v-else>
                <el-form-item>
                    <h1>注册</h1>
                </el-form-item>
                <el-form-item label="用户名：" prop="username">
                    <el-input v-model="regesterForm.username" :prefix-icon="User" placeholder="请输入账号">
                    </el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input v-model="regesterForm.password" type="password" :prefix-icon="Lock" placeholder="请输入密码">
                    </el-input>
                </el-form-item>
                <el-form-item label="密码确认：" prop="repassword">
                    <el-input v-model="regesterForm.repassword" :prefix-icon="Lock" placeholder="请再次输入密码">
                    </el-input>
                </el-form-item>

                <el-form-item class="login-page-submit">
                    <el-button @click="register">注册</el-button>
                </el-form-item>

                <el-form-item class="login-page-login">
                    <el-link type="info" @click="ChangeLoginOfRe()">
                        ←登录
                    </el-link>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>
<style scoped>
.logindiv {
    margin: 10vh auto;
    height: 80vh;
    width: 80vw;
    background-color: rgb(243, 249, 247);

}

.login-pic {
    background: url('@/assets/login_logo.png') no-repeat center/240px,
        url('@/assets/login_pic.jpg') no-repeat center/cover;

}

.logindiv .login-pic {
    border-radius: 5%;
    background-color: rgb(122, 122, 239);
}

.logindiv .login-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none
}

.login-page-setting {
    display: flex;
    justify-content: space-between;
}

.login-page-setting label {
    flex: 1;
}

.logindiv .login-page .login-page-submit button {
    width: 100%;
    background-color: rgb(60, 82, 246);
    color: rgb(248, 238, 238);
}

.logindiv .login-page .login-page-submit button:hover {
    background-color: rgb(173, 180, 236);
}

.login-page-login a {
    border: none;
    background-color: rgb(243, 249, 247);
}

.login-page-login a:hover {
    color: aquamarine;
}
</style>
