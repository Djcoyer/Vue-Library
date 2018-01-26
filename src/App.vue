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
        onRouteEnter() {

        },
        components: {
            appHeader: Header
        },
        created() {
            eventBus.$on(Constants.AUTHENTICATED, () => {
                console.log("AUTHENTICATED");
               this.$store.dispatch('getUser');
            });
        }
    }
</script>

