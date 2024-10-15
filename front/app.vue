<template>
    <main id="main">
        <NuxtRouteAnnouncer />
        <HeaderComponent :menuItems="menuItems"></HeaderComponent>
        <NuxtPage />
        <FooterComponent></FooterComponent>
    </main>
</template>

<script lang="ts">
export default {
    setup () {
        return {
            menuItems: {
                auth: {
                    login: { href: '/login', label: 'Login' },
                    logout: { href: '/logout', label: 'Logout' },
                },
                defaults: [
                    { href: '/register', label: 'Register' },
                    { href: '/users', label: 'Users' },
                    { href: '/transfers', label: 'Transfers' },
                ],
            },
        }
    },
}
</script>

<style lang="scss">
@import url('/assets/css/main.scss');
</style>
