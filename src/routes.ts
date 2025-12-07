import HomeScreen from "./ui/screens/home/HomeScreen.vue";

export const routes = [
    { path: '/', component: HomeScreen },
    { path: '/home', redirect: '/' },
]
