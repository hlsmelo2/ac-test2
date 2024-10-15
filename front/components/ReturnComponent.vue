<template lang="pug">
div
    h1 {{ getData().title }}
    div
        label Amount:
        span {{ transfer.amount }}
    div
        label {{ getData().label.actor }}
        span {{ transfer[getData().actor]?.name }}
    div.buttons
        button(@click="useRouter().back()") Cancel
        button(@click="mainAction()") {{ getData().label.mainButton }}
</template>

<script lang="ts">

export default {
    setup () {
        return {}
    },
    props: ['mode'],
    data() {
        return {
            id: 0,
            transfer: {},
            viewData: {
                give: {
                    title: 'Deseja devolver os valores desta transferencia?',
                    actor: 'sender',
                    label: {
                        actor: 'Sender',
                        mainButton: 'Give Return',
                    },
                },
                request: {
                    title: 'Deseja solicitar a devolução dos valores desta transferencia?',
                    actor: 'receiver',
                    label: {
                        actor: 'Receiver',
                        mainButton: 'Request Return',
                    },
                },
            },
        };
    },
    methods: {
        getData() {
            return (<any>this.viewData)[this.mode];
        },
        async request(endpoint: string, body: any = {}, method: string = 'get') {
            const { $requester } = useNuxtApp();
            const url = `/${endpoint}`;

            const { data } = await $requester.request({
                method,
                url,
                data: body,
            });

            return data;
        },
        async getTransfer() {
            const transfer = await this.request(`transfers/${this.id}`);

            this.transfer = transfer.length > 0 ? transfer[0] : {};
        },
        async mainAction() {
            const request = await this.request(`transfers/${this.id}/return/${this.mode}`, {
            }, 'put');

            console.log(request);
            useRouter().replace('/transfers');
        },
    },
    mounted() {
        this.id = (<any>useRoute().params.id);
        this.getTransfer();
    },
}
</script>

<style lang="scss" scoped>
</style>
