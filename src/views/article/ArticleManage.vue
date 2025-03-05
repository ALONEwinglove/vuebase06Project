<script setup>
import { Edit, Delete } from '@element-plus/icons-vue'
import { ref } from 'vue';
import ArticleSelect from './components/ArticleSelect.vue'
import { articleGetListService, articleDeleteService } from '@/api/article';
import { formatTime } from '@/utils/format';
import ArticleDrawer from './components/ArticleDrawer.vue';
import { ElMessage } from 'element-plus';
// 文章列表信息
const articleList = ref([]);
const articletotal = ref(0);
// 加载动画
const loadingfalg = ref(false);
// 定义请求参数对象
// 分类变量
const articleSelectObj = ref({
   pagenum: 1,  //当前页
   pagesize: 5,  //每页大小
   cate_id: '', //分类限制
   state: '' //状态限制
});
// 初始请求获取文章信息
const getarticleList = async () => {
   loadingfalg.value = true;
   const res = await articleGetListService(articleSelectObj.value);
   console.log("ArticleManage组件", res);
   articleList.value = res.data.data;
   articletotal.value = res.data.total;
   loadingfalg.value = false;
}
getarticleList();
// 搜索和重置
const onSearch = () => {
   console.log("搜索");
   articleSelectObj.value.pagenum = 1;
   getarticleList();
}
const onReset = () => {
   console.log("重置");
   articleSelectObj.value = {
      pagenum: 1,  //当前页
      pagesize: 5,  //每页大小
      cate_id: '', //分类限制
      state: '' //状态限制
   };
   getarticleList();
}
// 分页逻辑
// 页大小变动
const onSizeChange = (size) => {
   console.log("页大小变动");
   articleSelectObj.value.pagenum = 1;
   articleSelectObj.value.pagesize = size;

   getarticleList();

}
// 当前页变化
const onCurrentChange = (currentpage) => {
   console.log("当前页变化");
   articleSelectObj.value.pagenum = currentpage;
   getarticleList();
}
// 文章-抽屉-组件控制
const articledrawercom = ref();
// 监听事件->回调
const onSuccess = (state) => {
   if (state === 'add') {
      const lastPage = Math.ceil( (articletotal.value +1) / articleSelectObj.value.pagesize );
      articleSelectObj.value.pagenum = lastPage;
      getarticleList();
   }else {
      getarticleList();
   }
}
// 添加文章
const onAddArticle = () => {
   articledrawercom.value.open({});
}
// 编辑文章
const onEditArticle = (row) => {
   articledrawercom.value.open(row);
}
// 删除文章
const onDeleteArticle = async (row) => {
   console.log("DeleteArticle",row);
   await articleDeleteService(row.id);
   ElMessage.success('删除成功');
   getarticleList();
}
</script>
<template>
   <page-container title="文章管理">
      <template #button>
         <el-button type="primary" @click="onAddArticle()">添加文章</el-button>
      </template>
      <!-- 表单区域 -->
      <el-form inline class="top-form">
         <el-form-item label="文章分类">
            <!-- label展示数据，value提交数据 -->
            <!-- <el-select>
               <el-option label="展示" value="100"></el-option>
            </el-select> -->
            <ArticleSelect v-model="articleSelectObj.cate_id"></ArticleSelect>
         </el-form-item>
         <el-form-item  label="发布状态">
            <el-select v-model="articleSelectObj.state">
               <el-option label="已发布" value="已发布"></el-option>
               <el-option label="草稿" value="草稿"></el-option>
            </el-select>
         </el-form-item>
         <el-form-item>
            <el-button type="primary" @click="onSearch">搜索</el-button>
            <el-button @click="onReset">重置</el-button>
         </el-form-item>
      </el-form>
      <!-- 表格区域 -->
      <el-table :data="articleList" v-loading="loadingfalg">
         <el-table-column label="文章标题" prop="title">
            <template #default="{ row }">
               <el-link type="primary" :underline="false" @click="onEditArticle(row)">{{ row.title }}</el-link>
            </template>
         </el-table-column>
         <el-table-column label="分类" prop="cate_name"></el-table-column>
         <el-table-column label="发表时间" prop="pub_date">
            <template #default="{ row }">
               {{ formatTime(row.pub_data) }}
            </template>
         </el-table-column>
         <el-table-column label="状态" prop="state"></el-table-column>
         <el-table-column label="操作">
            <template #default="{ row }">
               <el-button circle plain type="primary" :icon="Edit" @click="onEditArticle(row)"></el-button>
               <el-button circle plain type="danger" :icon="Delete" @click="onDeleteArticle(row)"></el-button>
            </template>
         </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination :current-page="articleSelectObj.pagenum" :page-size="articleSelectObj.pagesize" :page-sizes="[2, 3, 5, 10]"
         :background="true" layout="->,jumper,total,sizes,prev,pager,next" :total="articletotal"
         @size-change="onSizeChange" @current-change="onCurrentChange"
         style="margin-top: 20px; justify-content: flex-end;"></el-pagination>
      <!-- 抽屉——文章内容展示 -->
       <ArticleDrawer ref="articledrawercom" @success="onSuccess"></ArticleDrawer>

   </page-container>
</template>
<style scoped>
.top-form .el-select {
   width: 150px;
}
</style>