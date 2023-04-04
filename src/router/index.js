import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailView from "../views/DetailView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.BASE_URL),
    routes: [ // Update "routers" to "routes"
        {
            path: "/",
            name: "home",   
            component: HomeView
        },
        {
            path: "/detail",
            name: "detail",
            component: DetailView
        }
    ]
})

export default router