<template lang="pug">
div#users.main-wrapper
    h1 Lista de usuários
    div(v-if="helpers.userCan('users', 'read')")
        UsersComponent(:users="users")
    div(v-if="!helpers.userCan('users', 'read')")
        h2.warning Você não tem permissão para acessar esta página
</template>

<script>

export default {
    setup () {
        return {}
    },
    data() {
        return {
            users: [],
        };
    },
    methods: {
        async get(endpoint) {
            const { $requester } = useNuxtApp();
            const url = `/${endpoint}`;
            const { data } = await $requester.get(url);

            return data;
        },
        async getAll() {
            this.users = await this.get('users');
        },
    },
    mounted() {
        this.getAll();
    },
}
</script>

<style lang="scss" scoped>

</style>
