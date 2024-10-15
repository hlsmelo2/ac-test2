<template lang="pug">
div.select-plus
    div(v-if="isList()")
        select(ref="select" :name="name" :id="name" :value="modelValue" @change="emitChange($event)")
            option(v-for="(option, index) of options" :key="index" :value="option[getValueKey()]") {{ option[getLabelKey()] }}
        <a v-if="false" href="#" @click.prevent.stop="changeMode()">Adicionar novo</a>
    div(v-if="!isList()")
        slot(name="main")
</template>

<script>
export default {
    setup () {
        return {}
    },
    props: ['name', 'selected', 'options', 'labelKey', 'valueKey', 'modelValue'],
    data() {
        return {
            mode: 'list',
        };
    },
    methods: {
        isList() {
            return this.mode === 'list';
        },
        changeMode() { this.mode = this.mode === 'list' ? 'form' : 'list'; },
        getLabelKey() {
            return this.labelKey === undefined ? 'label' : this.labelKey;
        },
        getValueKey() {
            return this.valueKey === undefined ? 'value' : this.valueKey;
        },
        emitChange(aEvent) {
            this.$emit('update:modelValue', aEvent.target.value);
        },
    },
}
</script>

<style lang="scss" scoped>
    div.select-plus { display: inline-block; }
</style>
