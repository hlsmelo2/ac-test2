<template lang="pug">
div
    table
        thead
            tr
                th ID
                th Name
                th Email
                th Actions
        tbody
            tr(v-for="(user, index) of users" :key="index")
                td {{ user.id }}
                td {{ user.name }}
                td {{ user.email }}
                td
                    div.buttons
                        NuxtLink(
                            :to="getActionLink(user.id)" class="details"
                        ) Details
                        NuxtLink(
                            :to="getActionLink(user.id, 'delete')" class="delete"
                        ) Delete
</template>

<script lang="ts">

export default {
    setup () {
        return {}
    },
    props: {
        users: Array,
    },
    data() {
        return {
        };
    },
    methods: {
        getActionLink(id: number, action: string = '') {
            return `/users/${id}/${action}`;
        },
    },
}
</script>

<style lang="scss" scoped>
ul {
    list-style-type: none;
}

</style>
