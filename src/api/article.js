import requset from '@/utils/request'
// 获取文章分类
export const articleGetClassService = () => requset.get('/my/cate/list')
// 增加文章分类
export const articleAddClassService = (data) => requset.post('/my/cate/add', data)
// 编辑文章分类
export const articleEditClassService = (data) => requset.put('/my/cate/info', data)
// 删除文章分类
export const articleDeleteClassService = (id) => requset.delete('/my/cate/del', { params: { id } })

// 获取文章列表
export const articleGetListService = (params) =>
    requset.get('/my/article/list', {
        params
    })
// 添加文章
// 注意：datah是一个formData格式的对象
export const articleAddService = (data) => requset.post('/my/article/add', data)
// 获取文章
export const articleGetServive = (id) => requset.get('/my/article/info', { params: { id } })
// 更新文章
export const articleUpdateService = (data) => requset.put('/my/article/info', data)
// 删除文章
export const articleDeleteService = (id) => requset.delete('/my/article/info', { params: { id } })