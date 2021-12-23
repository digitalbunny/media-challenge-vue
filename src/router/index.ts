import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Media from "@/views/Media.vue"
import MediaDetail from "@/views/MediaDetail.vue"

const routes: Array<RouteRecordRaw> = [
    { path: "/", name: "media", component: Media },
    { path: "/:id", name: "media-detail", component: MediaDetail, props: true },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
