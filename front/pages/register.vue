<template lang="pug">
div#register.main-wrapper
    AlertsComponent(ref="alerts")
    h1 Cadastrar usuário
    div
        label Name
        input(id="name" type="text" v-model="input.name")
    div
        label Email
        input(id="email" type="email" v-model="input.email")
    div
        label Password
        input(id="password" type="password" v-model="input.password")
    div
        label Repeat Password
        input(id="re-password" type="password" v-model="input.rePassword")
    div.buttons
        button(@click="register()") Register
</template>

<script lang="ts">

export default {
    setup () {
        return {}
    },
    data() {
        return {
            input: {
                name: '',
                email: '',
                password: '',
                rePassword: '',
            },
        };
    },
    methods: {
        async register() {
            if (this.input.password !== this.input.rePassword) {
                (<any>this.$refs).alerts.addError('The password fields should have the same value');

                return;
            }

            const url = 'users';
            const { data } = await helpers.getRequester().post(url, this.input);

            if (data.done === false) {
                (<any>this.$refs).alerts.addError('Error to try register');

                return;
            }

            navigateTo('/login');
        },
    },
}
</script>

<style lang="scss" scoped>

</style>