require('./bootstrap');

// Import modules...
import Vue from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue';
import PortalVue from 'portal-vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors'

Vue.mixin({ methods: { route } });
Vue.use(InertiaPlugin);
Vue.use(PortalVue);
Vue.use(Vuetify);

const app = document.getElementById('app');

new Vue({
    vuetify: new Vuetify({
        icons: {
            iconfont: 'md' || 'fa'
        },
        theme: {
            themes: {
                dark: {
                    background: colors.grey.lighten3, // Not automatically applied
                },
                light: {
                    background: colors.shades.white, // If not using lighten/darken, use base to return hex
                },
            },
        },
    }),
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
}).$mount(app);
