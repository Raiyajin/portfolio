import { createWebHistory, createRouter } from "vue-router";
import HomePage from './../views/HomePage.vue'
import ProjectPage from "../views/ProjectPage.vue";
import AdminPage from "../views/AdminPage.vue";
import AuthenticationPage from "../components/AdminAuthentication.vue";
import ErrorPage from "../views/ErrorPage.vue";

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
    {
        path: "/admin",
        name: "Admin",
        component: AdminPage,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "Error",
        component: ErrorPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;