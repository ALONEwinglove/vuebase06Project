import request from '@/utils/request'

export const userRegisterService = ({ username, password, repassword }) =>
    request.post('/api/reg', { username, password, repassword })

export const userLoginSerice = ({ username, password }) =>
    request.post('/api/login', { username, password })

export const userGetInformation = () =>
    request.get('/my/userinfo')

// 修改用户信息
export const userUpdateInformation = ({ id, nickname, email }) =>
    request.put('/my/userinfo', { id, nickname, email })

// 更新用户图像
export const userUpdateAvatarService = (avatar) =>
    request.patch('/my/update/avatar', { avatar })

// 更新用户密码
export const userUpdatePasswordService = ({ old_pwd, new_pwd, re_pwd }) => 
    request.patch('/my/updatepwd', { old_pwd, new_pwd, re_pwd })