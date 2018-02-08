<!--
 Created by dcoyer on 1/19/2018.
 -->

<template>
    <div class="mt-5">
        <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-30"></div>
            <div class="md-layout-item md-size-30">
                <md-card class="md-scrollbar">
                        <md-content class="md-primary" style="padding-top: .5em; padding-bottom:2em;">
                            <div class="md-layout md-gutter md-alignment-center-center">
                                <div class="md-layout-item md-size-40 ml-2">
                                    <span class="md-headline">User Profile</span>
                                </div>
                            </div>
                            <div class="md-layout md-gutter md-alignment-center-center mt-2">
                                <div class="md-layout-item md-size-30">
                                    <md-icon class="md-size-3x ml-2" style="color: whitesmoke">account_circle</md-icon>
                                </div>
                            </div>
                        </md-content>
                    <md-card-content>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-size-100">
                                <md-list class="md-triple-line">
                                    <md-list-item>
                                            <div class="md-layout md-gutter">
                                                <div class="md-layout-item md-size-10">Name</div>
                                                <div class="md-layout-item md-size-30"></div>
                                                <div class="md-layout-item md-size-10">{{user.firstName + ' ' + user.lastName}}</div>
                                                <div class="md-layout-item md-size-25"></div>
                                                <div class="md-layout-item md-size-10">
                                                    <md-button class="md-icon-button md-list-action"> > </md-button>
                                                </div>
                                            </div>
                                    </md-list-item>
                                </md-list>
                            </div>
                        </div>
                    </md-card-content>
                </md-card>
            </div>
            <div class="md-layout-item md-size-5"></div>
            <div class="md-layout-item md-size-25">
                <app-rentals></app-rentals>
            </div>
            <div class="md-layout-item md-size-5"></div>
        </div>
    </div>

</template>

<script>
    import store from '../../../store/store';
    import CurrentRentals from './CurrentRentals.vue';
    export default {
        components: {
          appRentals: CurrentRentals
        },
        methods: {},
        data() {
            return {}
        },
        computed: {
            user() {
                return this.$store.getters.getUser;
            }
        },
        beforeRouteEnter(to, from, next) {
            if (store.getters.getUser == null || store.getters.getUser.userId == null) {
                store.dispatch('getUser');
            }
            next();
        }
    }
</script>