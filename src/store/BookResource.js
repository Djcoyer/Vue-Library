/**
 * Created by dcoyer on 1/19/2018.
 */
import Vue from 'vue';
import VueResource from 'vue-resource';
import Config from  './../constants/Config';

Vue.use(VueResource);


export const BookResource = Vue.resource(Config.apiBaseUrl + 'books');