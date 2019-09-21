<template>
  <div>
    <h2 class="gochihandfont">How often will interest be reinvested?</h2>
    <input
    class="form-control"
    placeholder="compounding periods"
    type="text"
    v-model="compoundingPeriods"
    >
    <button 
    class="btn btn-success"
    @click.prevent="handler"
    >Compound My Interest</button>
  </div>
</template>

<script>
export default {
  props: {
    tmvInputs: Object,
    selectedComponent: [String, Object]
  },
  data() {
    return {
      compoundingPeriods: null
    }
  },
  methods: {
    handler() {
      this.updateComponent(); 
      this.updateInput(); 
    },
    updateComponent() {
      this.selectedComponent = 'Results'
      this.$emit('update:selectedComponent',this.selectedComponent)
      console.log(this.selectedComponent)
    },
    updateInput() {
      this.$emit('update:compoundingPeriods', this.compoundingPeriods)
      console.log(this.compoundingPeriods, this.tmvInputs);
    }
  }
}
</script>

<style>

</style>