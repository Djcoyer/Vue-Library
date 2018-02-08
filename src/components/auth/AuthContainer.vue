<!--
 Created by dcoyer on 1/26/2018.
 -->

<!--<template>-->
        <!--<app-login v-if="this.$router.currentRoute.path.indexOf('login') > -1" :register="register"></app-login>-->
        <!--<app-register v-else></app-register>-->
<!--</template>-->

<!--<script>-->
    <!--import LoginPage from './LoginPage.vue';-->
    <!--import RegisterPage from './RegisterPage.vue';-->

    <!--export default {-->
        <!--data() {-->
            <!--return {-->
                <!--mode: "LOGIN"-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--register() {-->
                <!--this.$router.push('/register');-->
            <!--}-->
        <!--},-->
        <!--computed: {-->

        <!--},-->
        <!--components: {-->
            <!--appLogin: LoginPage,-->
            <!--appRegister: RegisterPage-->
        <!--},-->
        <!--beforeRouteLeave (to, from , next) {-->
            <!--if(this.mode !== "LOGIN") {-->
                <!--const answer = window.confirm('Are you sure you want to leave? Any changes will be discarded');-->
                <!--if (answer) {-->
                    <!--next()-->
                <!--} else {-->
                    <!--next(false)-->
                <!--}-->
            <!--}-->
            <!--else next();-->
        <!--},-->
        <!--created() {-->
            <!--console.log(this.$router.currentRoute.path);-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<style>-->
    <!--.component-fade-enter-active, .component-fade-leave-active {-->
        <!--transition: opacity .4s ease;-->
    <!--}-->
    <!--.component-fade-enter, .component-fade-leave-to-->
        <!--/* .component-fade-leave-active below version 2.1.8 */ {-->
        <!--opacity: 0;-->
    <!--}-->
<!--</style>-->