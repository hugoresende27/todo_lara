require('./bootstrap');

import Vue from 'vue'
// import * as Vue from 'vue'

import App from '../vue/app' 

const app = new Vue ( {
    el: '#app',
    components: { App }
});

import { createApp } from "vue";
const app = createApp({
    // root instance definition
    el: '#app',
    components: { App }
});