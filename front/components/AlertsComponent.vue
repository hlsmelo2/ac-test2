<template lang="pug">
div.alert(v-if="hasErrors()") {{ getFirstError() }}
</template>

<script>
export default {
    setup () {
        return {}
    },
    data() {
        return {
            messages: {
                errors: [],
                alerts: [],
                success: [],
            },
            hasErrors() {
                return this.messages.errors.length > 0;
            },
            getFirstError() {
                return this.messages.errors[0];
            },
            addError(message) {
                const self = this;
                self.messages.errors.push(message);

                window.onclick = function () {
                    self.messages.errors = [];
                    window.onclick = null;
                };
            },
        };
    },
}
</script>

<style lang="scss" scoped>

</style>
