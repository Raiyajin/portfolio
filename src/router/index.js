import { createWebHistory, createRouter } from "vue-router";
import HomePage from './../views/HomePage.vue'
import ProjectPage from "../views/ProjectPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/projects",
        name: "Projects",
        component: ProjectPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;