<template lang="pug">
div
    div.toolbar
        div.main-buttons
            NuxtLink(v-if="helpers.userCan('transfers', 'deposit')" to="/deposit" class="make-deposit button") Make Deposit
            NuxtLink(v-if="helpers.userCan('transfers', 'send')" to="/transfers/send" class="send-transfer button") Send Transfer
        div.filters
            label Filter
            a(href="#" class="button" :class="getFilterClass('deposit')" @click="filterTransfers('deposit')" class="deposit") Deposits
            a(href="#" class="button" :class="getFilterClass('all')" @click="filterTransfers('all')" class="all") All
            a(href="#" class="button" :class="getFilterClass('received')" @click="filterTransfers('received')" class="received") Received
            a(href="#" class="button" :class="getFilterClass('sended')" @click="filterTransfers('sended')" class="sended") Sended

    table
        thead
            tr
                th ID
                th Amount
                th Sender
                th Receiver
                th Return
                th Req
                th Actions
        tbody
            tr(v-for="(transfer, index) of getFilteredTransfers()" :key="index")
                td {{ transfer.id }}
                td {{ transfer.amount }}
                td {{ transfer.sender.name }}
                td {{ transfer.receiver.name }}
                td {{ transfer.return }}
                td {{ transfer['request-return'] }}
                td
                    div.buttons
                        NuxtLink(
                            v-if="helpers.userCan('transfers', 'request-return') && canShowReturnButton('request', transfer)"
                            :to="getReturnLink('request', transfer.id)" class="request-return"
                        ) Request Return

                        NuxtLink(
                            v-if="helpers.userCan('transfers', 'return') && canShowReturnButton('give', transfer)"
                            :to="getReturnLink('give', transfer.id)" class="return") Give Return
</template>

<script lang="ts">
import { helpers } from '@/utils';


export default {
    setup () {
        return {}
    },
    props: {
        transfers: Array,
    },
    data() {
        return {
            currentUser: null,
            list: {
                filter: 'all',
            },
        };
    },
    methods: {
        canShowReturnButton(mode: string, transfer: any) {
            const requested = transfer['request-return'];
            const id = (<any>this.currentUser).id;

            return (
                mode === 'request' ?
                transfer.sender.id === id && !requested && !transfer.return :
                transfer.receiver.id === id && !transfer.return && requested
            );
        },
        filterTransfers(filter: string) {
            this.list.filter = filter;
        },
        getFilterClass(filter: string) {
            return this.list.filter === filter ? 'active' : '';
        },
        getFilteredTransfers() {
            if (this.list.filter === 'deposit') {
                return helpers.getDeposits(this.transfers);
            }

            const transfers = helpers.getMyTransfers(this.transfers);

            if (this.list.filter === 'all') {
                return transfers;
            }

            return transfers?.filter((item: any) => {
                const property = this.list.filter === 'sended' ? 'sender' : 'receiver';

                return (<any>item)[property].id === (<any>this.currentUser).id;
            });
        },
        getReturnLink(action: string, id: number) {
            return `/transfers/${id}/return/${action}`;
        },
    },
    mounted() {
        this.currentUser = helpers.getProfile();
    },
}
</script>

<style lang="scss" scoped>
ul {
    list-style-type: none;
}

</style>
