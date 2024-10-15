<template lang="pug">
div#user-details
    div
        label ID
        span {{ user.id }}
    div
        label Name
        input(type="text" v-model="user.name" :disabled="getDisabled()")
    div
        label Email
        input(type="text" v-model="user.email" :disabled="getDisabled()")
    div#permissions
        div.transfers
            CheckboxComponent(label="Read" :disabled="getDisabled()" v-model="user.permissions.transfers['read']")
            CheckboxComponent(label="Deposit" :disabled="getDisabled()" v-model="user.permissions.transfers['deposit']")
            CheckboxComponent(label="Send" :disabled="getDisabled()" v-model="user.permissions.transfers['send']")
            CheckboxComponent(label="Receive" :disabled="getDisabled()" v-model="user.permissions.transfers['receive']")
            CheckboxComponent(label="Give Return" :disabled="getDisabled()" v-model="user.permissions.transfers['return']")
            CheckboxComponent(label="Request Return" :disabled="getDisabled()" v-model="user.permissions.transfers['request-return']")
        div.users
            CheckboxComponent(label="Read" :disabled="getDisabled()" v-model="user.permissions.users['read']")
            CheckboxComponent(label="Alter" :disabled="getDisabled()" v-model="user.permissions.users['alter']")
            CheckboxComponent(label="Remove" :disabled="getDisabled()" v-model="user.permissions.users['delete']")
    div.buttons
        button(@click="useRouter().back()") Cancel
        button(@click="mainAction()") {{ viewData[mode].label }}
</template>

<script lang="ts">
import { helpers } from '@/utils';


export default {
    setup () {
        return {}
    },
    props: {
        user: Object,
        mode: String,
    },
    data() {
        return {
            viewData: {
                view: {
                    label: 'Edit',
                    action(id: number) {
                        useRouter().replace(`/users/${id}/edit`);
                    },
                },
                edit: {
                    label: 'OK',
                    async action(id: number) {
                        await (<any>this).givePermissions(id);
                        const url = `/users/${id}`;
                        const { data } = await helpers.getRequester().put(url, (<any>this).user);

                        if (data.done === false) {
                            return false;
                        }

                        useRouter().replace('/users');
                    },
                },
            },
        };
    },
    methods: {
        getDisabled() {
            return this.mode === 'view' ? true : false;
        },
        async givePermissions(id: number) {
            const url = `/users/${id}/permissions`;
            const { permissions } = (<any>this).user;
            const { data } = await helpers.getRequester().post(url, { permissions });

            if (data.done === false) {
                throw new Error('Update permissions fail');
            }

            return data;
        },
        mainAction() {
            (<any>this.viewData)[(<string>this.mode)].action.bind(this)((<any>this.user).id);
        },
    },
}
</script>

<style lang="scss" scoped>
ul {
    list-style-type: none;
}

</style>
