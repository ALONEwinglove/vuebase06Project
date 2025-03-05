<script setup>
// 获取父组件数据
defineProps({
    title: {
        require: true,
        type: String
    }
});
</script>
<template>
    <el-card class="articlemanage">
        <template #header>
            <div class="AMheader">
                <span>{{ title }}</span>
                <div class="AMHbutton">
                    <!-- 插槽：自定义按钮--由父组件提供 -->
                    <slot name="button"></slot>
                </div>
            </div>
        </template>
        <!-- 插槽： -->
        <slot> </slot>
    </el-card>
</template>
<style scoped>
.articlemanage {
    min-height: 100%;
    box-sizing: border-box;

}

.AMheader {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>