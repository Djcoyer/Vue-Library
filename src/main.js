import Vue from 'vue'
import App from './App.vue'
import store from './store/store';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes';
import {sync} from 'vuex-router-sync';
import {authFunctions} from './functions/AuthFunctions';
import VueMaterial from 'vue-material';

Vue.use(VueResource);
Vue.use(VueMaterial);
Vue.use(VueRouter);

export const eventBus = new Vue();

const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    if(!store.getters.isAuthenticated){
        authFunctions.checkAuthenticated();
    }
   next();
});

sync(store, router);
Vue.http.options.root = "http://localhost:8091/";

Vue.mixin({
    methods: {
        logout: () => {
            if(store.isAuthenticated) {
               store.dispatch('logout');
            }
        }
    }
});

const vue = new Vue({
    el: '#app',
    store,
    router,
    headers: {

    },
    render: h => h(App)
});

