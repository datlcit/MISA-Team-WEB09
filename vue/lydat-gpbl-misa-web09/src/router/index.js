
import { createRouter, createWebHistory } from "vue-router";
import EmployeeList from '../views/employee/PopupFormDetail.vue'

const routes = [
    { path: "/", component: EmployeeList},
    { path: "/employee", component: EmployeeList}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;