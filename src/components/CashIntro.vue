<template>
  <div>
    <h3 class="gochihandfont">Please select Starting or Ending Cash</h3>
    <!-- Need to insert an animated icon svg  -->
    <select 
    class="custom-select custom-select mb-3" id="starting-point"
    @change="onChange($event)"
    >
      <option selected>Choose Your Starting Point</option>
      <option value="start">Starting Cash</option>
      <option value="end">Ending Cash</option>
    </select>
    <button 
    class="btn btn-success"
    @click.prevent="handler"
    >Begin</button>
  </div>
  
  
</template>

<script>
export default {
  props: {
    intro: String,
    tmvInputs: Object,
    selectedComponent: [String, Object],
  },
  data() {
    return {
      startPoint: undefined
    }
  },
  methods: {
    handler() {
      this.updateComponent(); 
    },
    onChange(event) {
      this.startPoint = event.target.value
      this.$emit('update:intro',this.startPoint)
      console.log(`this is the parent attr intro: ${this.intro}`, typeof(this.intro))
    },
    updateComponent() {
    this.selectedComponent = 'CashInfo';
    this.$emit('update:selectedComponent', this.selectedComponent);
    }
  }
}
</script>

<style>

</style>