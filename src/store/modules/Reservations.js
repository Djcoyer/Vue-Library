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
     reservation_loading: false,
     reservation_error: null
 };

 const mutations = {
     "ADD_RESERVATION"(state) {
         state.isLoading = true;
         state.reservation = {};
     },
     "ADDED_RESERVATION"(state, reservation) {
         state.isLoading = false;
         eventBus.$emit(Constants.RESERVATION_ADDED, reservation.reservationId);
     },
     "RESERVATION_FAILED"(state, error) {
         state.isLoading = false;
         state.reservation = null;
         state.reservation_error = error;
         eventBus.$emit(Constants.RESERVATION_FAILED);
     }
 };

 const getters = {
     reservationError(state) {
         return state.reservation_error;
     },
     reservationLoading(state) {
         return state.reservation_loading;
     }
 };

 const actions = {
     addReservation: ({commit}, reservation) => {
         commit("ADD_RESERVATION");
         console.log(apiBaseUrl);
         console.log(baseUrl);
         Vue.http.post(baseUrl, reservation)
             .then((response) => {
                 commit("ADDED_RESERVATION", response.body);
         }).catch((err) => {
            console.log(err);
            commit("RESERVATION_FAILED", err);
         });
     }
 };

 export default {
     state,
     mutations,
     getters,
     actions
 }