import { dayjs } from "element-plus";

// 封装
export const formatTime = (time) => dayjs(time).format('YYYY年MM月DD日');