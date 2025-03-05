import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia

// 按需到出所用仓库
// import { useUserStore } from './user'
// export { useUserStore }
export * from './user'