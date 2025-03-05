import { userGetInformation } from "@/api/user";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('big-user', () => {
    // 登录信息
    const token =ref('');
    const setToken = (newToken) => {
        token.value = newToken;
    };
    const removeToken = () => {
        token.value = '';
    };
    // 用户基本信息
    const user = ref({});
    const getUser = async () => {
        const res = await userGetInformation();
        user.value = res.data.data;
    };
    const setUser = (obj) => {
        user.value = obj;
    }

    return {
        token,
        setToken,
        removeToken,
        user,
        getUser,
        setUser
    }
},{
    persist: true,
})