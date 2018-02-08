/**
 * Created by dcoyer on 2/6/2018.
 */
import Vue from 'vue';
import VueResource from 'vue-resource';
import {apiBaseUrl} from './../../constants/Config';
import {eventBus} from './../../main';
import {Constants} from './../../constants/Constants';

Vue.use(VueResource);

let baseUrl = apiBaseUrl + "reservations";

 const state = {
     reservations: [],
     reservation: {},
     userReservations: [],
     reservation_loading: false,
     reservation_error: null
 };

 const mutations = {
     "ADD_RESERVATION"(state) {
         state.reservation_loading = true;
         state.reservation = {};
     },
     "ADDED_RESERVATION"(state, reservation) {
         state.reservation_loading= false;
         eventBus.$emit(Constants.RESERVATION_ADDED, reservation.reservationId);
     },
     "RESERVATION_FAILED"(state, error) {
         state.reservation_loading = false;
         state.reservation = null;
         state.reservation_error = error;
         eventBus.$emit(Constants.RESERVATION_FAILED);
     },
     "GET_RESERVATION"(state, reservation) {
         state.reservation = {};
         state.reservation_loading= true;
     },
     "RETRIEVED_RESERVATION"(state,reservation) {
         state.reservation_loading= false;
         state.reservation = reservation;
         state.reservation_error = null;
     },
     "GET_USER_RESERVATIONS"(state) {
         state.userReservations = [];
         state.reservation_loading= true;
     },
     "RETRIEVED_USER_RESERVATIONS"(state, reservations) {
         state.reservation_loading= false;
         state.userReservations = reservations;
         state.reservation_error = null;
     },
     "USER_RESERVATIONS_FAILED"(state,err) {
         state.reservation_loading = false;
         state.userReservations = [];
         state.reservation_error = err;
     }
 };

 const getters = {
     reservationError(state) {
         return state.reservation_error;
     },
     reservationLoading(state) {
         return state.reservation_loading;
     },
     reservation(state) {
         return state.reservation;
     },
     userReservations(state) {
         return state.userReservations
     }
 };

 const actions = {
     addReservation: ({commit}, reservation) => {
         commit("ADD_RESERVATION");
         Vue.http.post(baseUrl, reservation)
             .then((response) => {
                 commit("ADDED_RESERVATION", response.body);
         }).catch((err) => {
            console.log(err);
            commit("RESERVATION_FAILED", err);
         });
     },

     getReservation: ({commit}, reservationId) => {
        commit("GET_RESERVATION");
        let url = baseUrl + "/aggregate/" + reservationId;
        Vue.http.get(url)
            .then((response) => {
                commit(Constants.RETRIEVED_RESERVATION, response.body);
            }).catch((err) => {

        })
     },

     getUserReservations: ({commit}, userId) => {
         commit(Constants.GET_USER_RESERVATIONS);
         let url = baseUrl + "/users/" + userId;

         Vue.http.get(url)
             .then((response) => {
                 commit(Constants.RETRIEVED_USER_RESERVATIONS, response.body);
             }).catch((err) => {
                 console.log(err);
                 commit(Constants.USER_RESERVATIONS_FAILED, err);
         })
     }
 };

 export default {
     state,
     mutations,
     getters,
     actions
 }