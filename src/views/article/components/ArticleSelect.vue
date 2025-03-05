<script setup>
import { ref } from 'vue';
import { articleGetClassService } from '@/api/article.js'

defineProps({
    modelValue: {
        type: [Number, String]
    }
})
const emit = defineEmits(['update:modelValue'])

const articleClassList = ref([]);
const getarticleClassList = async () => {
    const res = await articleGetClassService();
    articleClassList.value = res.data.data;
    console.log("ArticleSelect组件",res, articleClassList);

};
getarticleClassList();
</script>
<template>
    <el-select :modelValue="modelValue" @update:modelValue="emit('update:modelValue', $event)">
        <el-option v-for="article in articleClassList" :key="article.id" :label="article.cate_name"
            :value="article.id"></el-option>
    </el-select>
</template>