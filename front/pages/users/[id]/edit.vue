<template lang="pug">
div#user-edit.main-wrapper
    h1 Editar usuário
    UserDetailsComponent(:user="user" mode="edit")
</template>

<script>

import { helpers } from '@/utils';

export default {
    setup () {
        return {}
    },
    data() {
        return {
            user: {
                permissions: helpers.getPermissions(),
            },
        };
    },
    methods: {
        async getUser() {
            const id = useRoute().params.id;
            const { data } = await helpers.getRequester().get(`users/${id}`);

            if (data.done === false) {
                return;
            }

            data.permissions = helpers.getPermissions(data.permissions);
            this.user = data;
        },
    },
    mounted() {
        this.getUser();
    },
}
</script>

<style lang="scss" scoped>

</style>