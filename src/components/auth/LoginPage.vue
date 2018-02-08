<!--
 Created by dcoyer on 1/19/2018.
 -->

<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-sm-4 offset-4">
                <md-card>
                    <md-card-header>
                        <div class="md-title">
                            Login
                        </div>
                    </md-card-header>
                    <md-card-content>
                        <form id="loginForm" v-on:keyup.enter="login">
                                <md-field>
                                    <label>Email Address</label>
                                    <md-input v-model="emailAddress" required></md-input>
                                </md-field>
                            <md-field>
                                <label>Password</label>
                                <md-input v-model="password" type="password" required></md-input>
                            </md-field>

                            <div class="row">
                                <div class="col-sm-12">
                                    <md-button class="md-primary float-left md-dense" @click="register()">Register</md-button>
                                    <md-button class="float-right md-raised md-primary" @click="login">Login</md-button>
                                </div>
                            </div>
                        </form>
                    </md-card-content>
                </md-card>
                </div>
            </div>
        </div>
</template>

<script>
    import {eventBus} from './../../main';
    import {Constants} from './../../constants/Constants';
    export default {
        components: {},
        data() {
            return {
                emailAddress: "",
                password: ""
            }
        },
        computed: {
            isAuthenticated() {
                return this.$store.getters.isAuthenticated;
            }
        },
        methods: {
            login(e) {
                e.preventDefault();
                let loginInfo = {
                    username: this.emailAddress,
                    password: this.password
                };
                this.$store.dispatch('login', loginInfo);
                this.emailAddress = "";
                this.password = "";
            }
        },
        created() {
          eventBus.$on(Constants.LOGGED_IN, () => {
             this.$router.push('/');
          });
          eventBus.$on(Constants.LOGIN_FAILED, () => {
              this.emailAddress = "";
              this.password = "";
          });
        },
        beforeRouteEnter(to,from,next) {
            //If user is authenticated before visiting
            //Redirect to user profile
            next();
        },
        props: {
            register: {
                type:Function
            }
        }
    }

</script>