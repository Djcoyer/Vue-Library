<!--
 Created by dcoyer on 1/26/2018.
 -->

<template>
    <transition name="component-fade" mode="out-in">
        <app-login v-if="mode === 'LOGIN'" :register="register"></app-login>
        <app-register v-else></app-register>
    </transition>
</template>

<script>
    import LoginPage from './LoginPage.vue';
    import RegisterPage from './RegisterPage.vue';

    export default {
        data() {
            return {
                mode: "LOGIN"
            }
        },
        methods: {
            register() {
                this.mode = "REGISTER"
            }
        },
        computed: {

        },
        components: {
            appLogin: LoginPage,
            appRegister: RegisterPage
        },
        beforeRouteLeave (to, from , next) {
            if(this.mode !== "LOGIN") {
                const answer = window.confirm('Are you sure you want to leave? Any changes will be discarded');
                if (answer) {
                    next()
                } else {
                    next(false)
                }
            }
            else next();
        }
    }
</script>

<style>
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .4s ease;
    }
    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>