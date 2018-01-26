/**
 * Created by dcoyer on 1/18/2018.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import Books from './modules/Books';
import Auth from './modules/Auth';

Vue.use(Vuex);

export default new Vuex.Store({

    modules: {
        Books,
        Auth
    }
});