<template>
    <div>
        <app-header></app-header>
        <div class="container-fluid">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import {eventBus} from './main';
    import {Constants} from "./constants/Constants";
    import {authFunctions} from './functions/AuthFunctions';

    export default {
        data() {
            return {
                resource: {}
            }
        },
        computed: {
          isAuthenticated() {
              return this.$store.getters.isAuthenticated
          }
        },
        onRouteEnter() {

        },
        components: {
            appHeader: Header
        },
        created() {
            this.$store.dispatch('getUser');
            eventBus.$on(Constants.AUTHENTICATED, () => {
               this.$store.dispatch('getUser');
            });
            eventBus.$on(Constants.LOGGED_OUT, () => {
                this.$router.push('/');
            })
        }
    }
</script>

