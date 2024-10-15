<template lang="pug">
div#balance
    label My Balance:
    span R$ {{ getBalance() }}
</template>

<script lang="ts">
import { helpers } from '~/utils';


export default {
    setup () {
        return {}
    },
    props: {
        transfers: Array,
    },
    data() {
        return {
        };
    },
    methods: {
        getBalance() {
            const userId = helpers.getCurrentUser().getProfile('id');
            let balance = 0;

            this.transfers?.forEach((item: any) => {
                if (item.return) {
                    return;
                }

                if (
                    item.sender.id === item.receiver.id
                    && [item.sender.id, item.receiver.id].indexOf(userId) > -1
                ) {
                    balance += item.amount;

                    return;
                }

                if (item.receiver.id === userId ) {
                    balance += item.amount;

                    return;
                }

                if (item.sender.id === userId) {
                    balance -= item.amount;
                }
            });

            return balance;
        },
    },
}
</script>

<style lang="scss" scoped>
ul {
    list-style-type: none;
}

</style>
