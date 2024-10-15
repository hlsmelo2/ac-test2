<template lang="pug">
div#transfer-send.main-wrapper
    h1 Make Deposit
    div
        TransfersBalanceComponent(:transfers="transfers")
    DepositTransferComponent(mode="deposit")
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
