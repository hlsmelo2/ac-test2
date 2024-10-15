<template lang="pug">
div
    input(
        type="checkbox"
        true-value="1"
        false-value="0"
        :id="name"
        :name="name"
        :disabled="disabled"
        :checked="getChecked()"
        :value="modelValue"
        @click="emitChange($event)"
    )
    label {{ label }}
</template>

<script>
export default {
    setup () {
        return {}
    },
    props: ['name', 'label', 'checked', 'disabled', 'value', 'modelValue'],
    data() {
        return {
        };
    },
    methods: {
        getChecked() {
            return this.checked ? 1 : this.modelValue;
        },
        emitChange(aEvent) {
            this.$emit('update:modelValue', aEvent.target.checked ? 1 : 0);
        },
    },
}
</script>

<style lang="scss" scoped>
</style>
