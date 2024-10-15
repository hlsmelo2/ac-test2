<template lang="pug">
div#user-delete.main-wrapper
    h1 Deseja mesmo excluir esse usuário?
    div
        label ID
        span {{ user.id }}
    div
        label Name
        span {{ user.name }}
    div
        label Email
        span {{ user.email }}
    div.buttons
        button(@click="useRouter().back()") Cancel
        button(@click="remove()") Delete
</template>

<script>
export default {
    setup () {
        return {}
    },
    data() {
        return {
            user: {},
        };
    },
    methods: {
        async getUser() {
            const id = useRoute().params.id;
            const { data } = await helpers.getRequester().get(`/users/${id}`);

            this.user = data.length > 0 ? data[0] : {};
        },
        async remove() {
            const { data } = await helpers.getRequester().delete(`/users/${this.user.id}`);

            if (data.done === false) {
                return;
            }

            useRouter().replace('/users');
        },
    },
    mounted() {
        this.getUser();
    },
}
</script>

<style lang="scss" scoped>

</style>
