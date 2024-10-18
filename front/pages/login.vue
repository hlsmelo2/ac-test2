<template lang="pug">
div#login.main-wrapper
    AlertsComponent(ref="alerts")
    h1 Login
    div
        label Email
        input(id="email" type="email" v-model="input.email")
    div
        label Password
        input(id="password" type="password" v-model="input.password")
    div.buttons
        button(@click="login()") Login
</template>

<script lang="ts">
import axios from 'axios';


export default {
    setup () {
        return {
        }
    },
    data() {
        return {
            input: {
                email: '',
                password: '',
            },
        }
    },
    methods: {
        async setAuthCookie(profileData: any, token: string) {
            const cookie = useCookie('profile', {
                path: '/',
                maxAge: (<any>useRuntimeConfig().public.AUTH_COOKIES_EXPIRATION) * 60,
            });

            const profile = { ...profileData, token };
            cookie.value = JSON.stringify(profile);
            refreshCookie('profile');
        },
        async login() {
            const loginData = await helpers.getRequester().post('/auth/login', {
                email: this.input.email,
                password: this.input.password,
            });

            if (loginData.data.done === false) {
                (<any>this.$refs).alerts.addError('Error to try login');
                return;
            }

            const { $requesterConfig } = useNuxtApp();
            const token = loginData.data.access_token;
            $requesterConfig.addAuthorization(token);
            const profileData = await helpers.getRequester().get('/profile');

            this.setAuthCookie(profileData.data, token);
            navigateTo('/transfers');
        },
    },
}
</script>

<style lang="scss" scoped>

</style>