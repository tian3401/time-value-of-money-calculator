<template>
  <div>
    <div>
      <h2 class="gochihandfont">How fast will this money grow?</h2>
      <input type="text"
      class="form-control"
      placeholder="rate"
      v-model="rate"
      >
      <button 
      class="btn btn-success"
      @click.prevent="handler"
      >Let's Go!</button>
    </div>
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
      rate: null
    }
  },
  methods: {
    handler() {
      this.updateComponent(); 
      this.updateInput(); 
    },
    updateComponent() {
      this.selectedComponent = 'CompoundingPeriods'
      this.$emit('update:selectedComponent',this.selectedComponent)
      console.log(this.selectedComponent)
    },
    updateInput() {
      this.$emit('update:rate', this.rate)
      console.log(this.rate, this.tmvInputs);
    }
  }
}
</script>

<style>

</style>