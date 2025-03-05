<script setup>
import { Management, Checked, User, EditPen, Crop, Avatar, CaretBottom, SwitchButton } from '@element-plus/icons-vue';
import { useUserStore } from '@/stores';
import { onMounted } from 'vue';
import router from '@/router';

//获取用户基本信息 
const userStore = useUserStore();
onMounted(() => {
    userStore.getUser();
})
// 下拉菜单
const DropdownCommand = (key) => {
    if (key === 'logout') {
        ElMessageBox.confirm(
            '确定退出？',
            '温馨提示',
            {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }
        ).then( () => {
            // 清除本地数据
            userStore.setUser({});
            userStore.removeToken();
            router.push('/login');
        }).catch( () => {

        })

    } else {
        router.push(`/personal/${key}`);
    }
}
</script>
<template>
    <el-container class="layoutdiv">
        <el-aside width="15%" class="layout-aside">
            <div class="layout-aside-logo"></div>
            <el-menu router :default.active="$route.path" background-color="#333333" text-color="#eeeeee">
                <el-menu-item index="/article/classification">
                    <el-icon>
                        <Management />
                    </el-icon>
                    <span>文章分类</span>
                </el-menu-item>
                <el-menu-item index="/article/manage">
                    <el-icon>
                        <Checked />
                    </el-icon>
                    <span>文章管理</span>
                </el-menu-item>
                <el-sub-menu index="/personal">
                    <template #title>
                        <el-icon>
                            <Avatar />
                        </el-icon>
                        <span>个人中心</span>
                    </template>
                    <el-menu-item index="/personal/information">
                        <el-icon>
                            <User />
                        </el-icon>
                        <span>基本资料</span>
                    </el-menu-item>
                    <el-menu-item index="/personal/picture">
                        <el-icon>
                            <Crop />
                        </el-icon>
                        <span>更换头像</span>
                    </el-menu-item>
                    <el-menu-item index="/personal/setting">
                        <el-icon>
                            <EditPen />
                        </el-icon>
                        <span>重置密码</span>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-aside>
        <el-container class="layout-bodydiv">
            <el-header>
                <div>用户账号：<strong>{{ userStore.user.nickname || userStore.user.username }}</strong></div>
                <el-dropdown placement="bottom-end" @command="DropdownCommand">
                    <span class="layout-bodydiv-HDropdown">
                        <el-avatar :src="userStore.user.user_pic || avatar" />
                        <el-icon>
                            <CaretBottom />
                        </el-icon>
                    </span>

                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item :icon="User" command="information">基本资料</el-dropdown-item>
                            <el-dropdown-item :icon="Crop" command="picture">更换头像</el-dropdown-item>
                            <el-dropdown-item :icon="EditPen" command="setting">重置密码</el-dropdown-item>
                            <el-dropdown-item :icon="SwitchButton" command="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer class="layout-bodydiv-footer">
                大事件 ©202 Created by xxxxxx
            </el-footer>
        </el-container>
    </el-container>
</template>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.layoutdiv {
    height: 100vh;
    background-color: #e7f4f7eb;
}

.layoutdiv .layout-aside {
    height: 100vh;
    background-color: #333333;
}

.layout-aside-logo {
    width: 100%;
    height: 25vh;
    background: url('@/assets/logo2.png') no-repeat center / 50% auto;
}

.layout-bodydiv .el-header {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(249, 251, 252);
}

.el-dropdown:hover {
    border: none;
    outline: none;
}

.layout-bodydiv-HDropdown {
    display: flex;
    align-items: center;
}

.layout-bodydiv-HDropdown:hover {
    border: none;
}

.layout-bodydiv .el-main {
    padding: 20px;
}

.layout-bodydiv-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;
}
</style>