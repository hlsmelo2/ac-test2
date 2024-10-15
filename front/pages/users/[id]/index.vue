<template lang="pug">
div#user-details.main-wrapper
    h1 Detalhes do usuário
    UserDetailsComponent(:user="user" mode="view")
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