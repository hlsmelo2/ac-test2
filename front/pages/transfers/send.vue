<template lang="pug">
div#transfer-send.main-wrapper
    h1 Send Transfer
    div
        TransfersBalanceComponent(:transfers="transfers")
    DepositTransferComponent(mode="transfer")
</template>

<script lang="ts">

export default {
    setup () {
        return {}
    },
}
</script>

<style lang="scss" scoped>
</style>
