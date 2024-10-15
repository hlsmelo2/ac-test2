<template lang="pug">
div#transfers.main-wrapper
    h1 Pagina de tranferencias
    div(v-if="helpers.userCan('transfers', 'read')")
        TransfersBalanceComponent(:transfers="transfers")
        TransfersComponent(:transfers="transfers")
    div(v-if="!helpers.userCan('transfers', 'read')")
        h2.warning Você não tem permissão para acessar esta página
</template>

<script>
import { helpers } from '@/utils';


export default {
    setup () {
        return {}
    },
    data() {
        return {
            transfers: [],
        };
    },
    methods: {
        async getAll() {
            const { data } = await helpers.getRequester().get(`transfers?user=${helpers.getProfile().id}`);
            this.transfers = data;
        },
    },
    mounted() {
        this.getAll();
    },
}
</script>

<style lang="scss" scoped>

</style>