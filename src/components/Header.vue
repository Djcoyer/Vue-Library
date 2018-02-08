<!--
 Created by dcoyer on 1/19/2018.
 -->

<template>
    <div>
        <md-toolbar class="md-dense mb-3">
            <div class="md-toolbar-row">
                <md-button class="md-icon-button" @click="menuVisible = !menuVisible" v-if="windowWidth < 1000">
                    <md-icon>menu</md-icon>
                </md-button>
                <div class="md-toolbar-section-start">
                    <router-link tag="button" to="/" class="md-button">
                        <h3 class="md-title" style="flex: 1">
                            Lone Wolf Library
                        </h3>
                    </router-link>
                </div>

                <div class="md-toolbar-section-end" v-if="windowWidth > 1000">
                    <md-tabs class="md-transparent" md-sync-router v-show="isAuthenticated">
                        <md-tab id="tab-home" md-label="Home" to="/">
                        </md-tab>
                        <md-tab id="tab-books" md-label="Books" to="/books"></md-tab>
                        <md-tab id="tab-profile" md-label="Profile" to="/user-profile"></md-tab>
                        <md-tab id="tab-logout" md-label="Logout" @click="logout"></md-tab>
                    </md-tabs>
                    <md-tabs class="md-transparent" md-sync-router v-show="!isAuthenticated">
                        <md-tab id="tab-home" md-label="Home" to="/">
                        </md-tab>
                        <md-tab id="tab-books" md-label="Books" to="/books"></md-tab>
                        <md-tab id="tab-login" md-label="Login" to="/login"></md-tab>
                    </md-tabs>
                </div>
            </div>
        </md-toolbar>

        <md-drawer :md-active.sync="menuVisible">
            <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

            <md-list>
                <md-list-item>
                    <md-icon>move_to_inbox</md-icon>
                    <span class="md-list-item-text">Inbox</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>send</md-icon>
                    <span class="md-list-item-text">Sent Mail</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>delete</md-icon>
                    <span class="md-list-item-text">Trash</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>error</md-icon>
                    <span class="md-list-item-text">Spam</span>
                </md-list-item>
            </md-list>
        </md-drawer>

    </div>

    <!--<nav class="navbar navbar-inverse bg-inverse mb-2 navbar-toggleable-sm">-->
        <!--<router-link class="navbar-brand" to="/">Lwolf Library</router-link>-->
        <!--<div class="collapse navbar-collapse" id="navbarNavAltMarkup">-->
            <!--<ul class="navbar-nav">-->
                <!--<router-link tag="li" class="nav-item" to="/books" activeClass="active"><a class="nav-link" href="#">Books</a></router-link>-->
                <!--<router-link tag="li" class="nav-item" to="/user-profile" activeClass="active" v-if="isAuthenticated"><a class="nav-link" href="#">Profile</a></router-link>-->

                <!--<router-link tag="li" class="nav-item" to="/login" activeClass="active" v-if="!isAuthenticated"><a class="nav-link" href="#">Login</a></router-link>-->
                <!--<li class="nav-item" style="cursor:pointer;" v-else><a class="nav-link" @click="logout">Logout</a></li>-->
            <!--</ul>-->
        <!--</div>-->
    <!--</nav>-->

</template>

<script>
    export default {
        data() {
          return {
              menuVisible: false,
              useMenu: false
          }
        },
        components:{

        },
        methods: {
            logout() {
                this.$store.dispatch('logout');
            }
        },
        computed: {
            isAuthenticated() {
                return this.$store.getters.isAuthenticated;
            },
            windowWidth() {
                return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            }
        },
        created() {
            window.addEventListener("resize", () => {

            })
        }
    }
</script>