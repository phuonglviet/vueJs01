import Router from 'vue-router';
import Home from '@pages/Home';
import User from '@pages/user/User';
import UserDetail from '@pages/user/UserDetail';
import UserEdit from '@pages/user/UserEdit';

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "homePage",
            component: Home
        },
        {
            path: "/user",
            name: "userPage",
            component: User
        },
        {
            path: "/user-detail",
            name: "userDetailPage",
            component: UserDetail
        },
        {
            path: "/user-edit",
            name: "userEditPage",
            component: UserEdit
        },
    ],
}
);

// export default router;