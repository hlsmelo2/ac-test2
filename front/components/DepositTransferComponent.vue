<template lang="pug">
div#transfer-send.main-wrapper
    div
        div
            label Amount
            input(v-model="input.amount")
        div(v-if="isMode('transfer')")
            label Receiver
            SelectPlus(:options="users" v-model="input.receiver" name="users" labelKey="name" valueKey="id")
        div.buttons
            button(@click="useRouter().back()") Cancel
            button(@click="send()") {{ this.modes[this.mode].sendLabel }}
</template>

<script lang="ts">
import { helpers } from '@/utils';

export default {
    setup () {
        return {}
    },
    props: ['mode'],
    data() {
        return {
            input: {
                amount: 0,
                sender: 0,
                receiver: 0,
            },
            transfers: [],
            users: [],
            modes: {
                transfer: {
                    sendLabel: 'Send Transfer',
                },
                deposit: {
                    sendLabel: 'Deposit',
                },
            },
        };
    },
    methods: {
        isMode(mode) {
            return this.mode === mode;
        },
        async setInitialReceiver() {
            if (this.users.length === 0) {
                return;
            }

            this.input.receiver = this.users[0].id;
        },
        async getData() {
            const data = await Promise.all([
                helpers.getRequester().get('users'),
                helpers.getRequester().get('transfers'),
            ]);

            this.users = data[0].data;
            this.transfers = data[1].data;
            this.setInitialReceiver();
        },
        getActors() {
            const sender = helpers.getProfile().id;
            const receiver = this.isMode('deposit') ? sender : this.input.receiver

            return {
                sender,
                receiver,
                amount: this.input.amount,
            };
        },
        async send() {
            const url = this.isMode('deposit') ? 'transfers/deposit' : 'transfers';

            const { data } = await helpers.getRequester()
                .post(url, this.getActors());

            if (data.done ===  false) {
                return;
            }

            useRouter().replace('/transfers');
        },
    },
    mounted() {
        this.getData();
    },
}
</script>

<style lang="scss" scoped>
</style>
