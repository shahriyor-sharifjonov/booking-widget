import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import OrderView from "../views/OrderView.vue";
import Thanks from "../views/ThanksView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",   
            component: HomeView
        },
        {
            path: "/order",
            name: "order",
            component: OrderView
        },
        {
            path: "/thanks",
            name: "thanks",
            component: Thanks
        }
    ]
})

export default router