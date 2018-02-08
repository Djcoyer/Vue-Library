<!--
 Created by dcoyer on 1/26/2018.
 -->
<template>
    <div class="container" style="margin-top: 7vh;">
        <div class="md-layout md-gutter md-alignment-center-center">
            <div class="md-layout-item md-size-45">
                <md-card>
                    <md-card-header>
                        <span class="md-title">
                            Register
                        </span>
                    </md-card-header>
                    <md-card-content>
                        <md-steppers :md-active-step.sync="active" md-alternative>
                            <md-step :id="step1" :md-done.sync="step1Done" md-label="Account Info">
                                <md-field>
                                    <label>Email Address</label>
                                    <md-input v-model="user.emailAddress" placeholder="name@example.com" required/>
                                </md-field>
                                <md-field>
                                    <label>Password</label>
                                    <md-input type="password" v-model="user.password" required/>
                                </md-field>
                                <md-field>
                                    <label>Confirm Password</label>
                                    <md-input type="password" v-model="confirmPassword" required/>
                                </md-field>
                                <md-checkbox v-model="user.isAdmin" class="md-primary">Admin?</md-checkbox>
                                <md-button class="md-primary float-right" @click="next(step1,step2)">Next</md-button>
                            </md-step>


                            <md-step :id="step2" :md-done.sync="step2Done" md-label="Personal Info">
                                <md-field>
                                    <label>First Name</label>
                                    <md-input required v-model="user.firstName"/>
                                </md-field>
                                <md-field>
                                    <label>Last Name</label>
                                    <md-input required v-model="user.lastName"/>
                                </md-field>
                                <md-button class="mr-0 md-primary md-dense float-right" @click="submit">Submit</md-button>
                                <md-button class="ml-0 md-primary md-dense float-right" @click="back(step2, step1)">Previous</md-button>
                            </md-step>
                        </md-steppers>
                        <span class="md-caption">Already registered? <router-link to="/login">Login</router-link></span>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
    import {eventBus} from './../../main';
    import {Constants} from "../../constants/Constants";

    export default {
        data() {
            return {
                step1: "first",
                step2: "second",
                step1Done: false,
                step2Done: false,
                active: this.step1,
                user: {
                    emailAddress: '',
                    password: '',
                    isAdmin: false,
                    firstName: '',
                    lastName: ''
                },

                confirmPassword: ''
            }
        },
        methods: {
            next(from, to) {
                if(from === this.step1) {
                    let user = this.user;
                    if(user.emailAddress === "" || user.password === ""){
                        alert("Please supply " + (user.emailAddress === "" ? "an email address" : "a password"));
                        return;
                    }
                    if(user.password !== this.confirmPassword){
                        alert("Passwords must match");
                        return;
                    }
                    else {
                        this.active = this.step2;
                    }
                }
            },
            back(from, to) {
                if(from === this.step1)
                    return;
                if(to != this.step1)
                    return;
                this.active = to;
            },

            submit(){
                let user = this.user;
                if(user.firstName === "" || user.lastName === "") {
                    alert("Please supply " + (user.firstName === "" ? "first name" : "last name"));
                    return;
                }

                this.$store.dispatch('registerUser', user);

            }
        },
        computed: {

        },
        created() {
            eventBus.$on(Constants.REGISTERED_USER, () => {
                this.$router.push('/login');
            });
        }
    }
</script>