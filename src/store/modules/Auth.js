import jwtDecode from 'jwt-decode';
import Vue from 'vue';
import VueResource from 'vue-resource';
import {apiBaseUrl} from './../../constants/Config';
import {eventBus} from './../../main';
import {Constants} from './../../constants/Constants';

Vue.use(VueResource);


const state = {
    tokens: {},
    isAuthenticated: false,
    user: {}
};

const mutations = {
    "LOGIN_USER"(state, tokens) {
        localStorage.setItem('id_token', tokens.id_token);
        let userInfo = jwtDecode(tokens.id_token);
        console.log(userInfo);
        let customerInfo = userInfo["http://customerInfo"];
        if (customerInfo == null) return null;
        let firstName = customerInfo.firstName;
        let lastName = customerInfo.lastName;
        let roles = customerInfo.roles;
        let userId = customerInfo.userId;
        let email = userInfo.name;
        let user = {
            firstName,
            lastName,
            roles,
            userId,
            email
        };
        state.user = user;
        state.tokens = tokens;
        state.isAuthenticated = true;
        console.log("HERE");
        eventBus.$emit(Constants.LOGGED_IN);
    },
    "LOGIN_FAILED"(state, err) {
        eventBus.$emit(Constants.LOGIN_FAILED);
    },
    "LOGOUT_USER"(state) {
        localStorage.removeItem("id_token");
        state.tokens = {};
        state.isAuthenticated = false;
    },
    "GET_USER"(state, user) {
        state.isAuthenticated = true;
        state.user = user;
    }
};

const getters = {
    // getToken(state) {
    //     if (state.tokens){
    //         return state.tokens.id_token;
    //     }
    //     else return null;
    // },
    isAuthenticated(state) {
        // let idToken = localStorage.getItem('id_token');
        // if(idToken == null)
        //     return false;
        // var decodedToken = jwtDecode(idToken);
        // if(state.isAuthenticated)
        //     return true;
        // else if(new Date().getTime() < decodedToken.exp *999.981){
        //     {
        //         state.isAuthenticated = true;
        //         return true;
        //     }
        // }
        return state.isAuthenticated;
    },

    getUser(state) {
        return state.user;
    },

    userId(state) {
      return state.user.userId
    }
};

const actions = {
    login: ({commit}, loginInfo) => {
        let data = JSON.stringify(loginInfo);
        new Promise((resolve, reject) => {
            Vue.http.post(apiBaseUrl + "auth/login", data)
                .then((response) => {
                    commit("LOGIN_USER", response.body);
                    resolve();
                })
                .catch((err) => {
                    commit("LOGIN_FAILED", err);
                    resolve();
                });
        });
    },

    logout: ({commit}) => {
        new Promise((resolve, reject) => {
            Vue.http.post(apiBaseUrl + "auth/logout", {}, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("id_token")
                }
            }).then((response) => {
                commit('LOGOUT_USER');
                resolve();
            });
        })
    },

    getUser: ({commit}) => {
        let idToken = localStorage.getItem('id_token');
        if (state.user && state.user.userId) {
            return state.user;
        }
        else if (idToken) {
            let userInfo = jwtDecode(idToken);
            let customerInfo = userInfo["http://customerInfo"];
            if (customerInfo == null) return null;
            let firstName = customerInfo.firstName;
            let lastName = customerInfo.lastName;
            let roles = customerInfo.roles;
            let userId = customerInfo.userId;
            let email = userInfo.name;
            let user = {
                firstName,
                lastName,
                roles,
                userId,
                email
            };
            commit("GET_USER", user);
        }
    }
};

export default {
    state,
    mutations,
    getters,
    actions
}