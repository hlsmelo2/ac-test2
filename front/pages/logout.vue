<template lang="pug">
</template>

<script lang="ts">

export default {
    setup () {
        return {
        }
    },
    data() {
        return {
        }
    },
    methods: {
        async logout() {
            const logoutData = await helpers.getRequester().post('/auth/logout');

            if (logoutData.data.done === false) {
                return;
            }

            const cookie = useCookie('profile');
            cookie.value = undefined;
            refreshCookie('profile');
            navigateTo('/login');
        },
    },
    mounted() {
        this.logout();
    }
}
</script>

<style lang="scss" scoped>

</style>
