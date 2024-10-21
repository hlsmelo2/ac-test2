<template lang="pug">
header
    LogoComponent(src="@/assets/img/adriano-cobuccio-logo.png")
    nav#main-menu
        ul
            li(v-for="(item, index) of getMenuItems()" :key="index")
                NuxtLink(:to="item.href") {{ item.label }}
    div#greeting {{ getHello() }}
</template>

<script lang="ts">
export default {
    setup () {
        return {
        }
    },
    props: ['menuItems'],
    methods: {
        getUser() {
            return useNuxtApp().$currentUser.getProfile();
        },
        isLogged() {
            return [undefined, null].indexOf(this.getUser()) === -1;
        },
        getHello() {
            return !this.isLogged() ? '' : `Hello ${this.getUser().name}`;
        },
        getMenuItems() {
            const authMenuKey = !this.isLogged() ? 'login' : 'logout';

            return [this.menuItems.auth[authMenuKey]]
                .concat(this.menuItems.defaults);
        },
    },
}
</script>

<style lang="scss" scoped>
nav#main-menu {
    ul { list-style-type: none; }

    li {
        display: inline-block;
        margin-right: 10px;
    }
}
</style>
