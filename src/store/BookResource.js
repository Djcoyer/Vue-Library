/**
 * Created by dcoyer on 1/19/2018.
 */
import Vue from 'vue';
import VueResource from 'vue-resource';
import {apiBaseUrl} from  './../constants/Config';

Vue.use(VueResource);


export const BookResource = Vue.resource(apiBaseUrl + 'books');