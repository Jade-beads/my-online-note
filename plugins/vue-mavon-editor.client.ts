import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin( (nuxtApp) => {
    nuxtApp.vueApp.use(mavonEditor)
} )
