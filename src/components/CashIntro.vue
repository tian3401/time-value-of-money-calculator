<template>
  <div>
    <h3>Please select Starting or Ending Cash</h3>
    <!-- Need to insert an animated icon svg  -->
    <select 
    class="custom-select custom-select-lg mb-3" id="starting-point"
    @change="onChange($event)"
    >
      <option selected>Choose Your Starting Point</option>
      <option value="startingCash">Starting Cash</option>
      <option value="endingCash">Ending Cash</option>
    </select>
    <button 
    class="btn btn-success"
    @click.prevent="handler"
    >Begin</button>
  </div>
  
  
</template>

<script>
import {eventBus} from '../main'
export default {
  props: {
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
      this.showStartingPoint(); 
      this.emitMethodToBus();  
    },
    emitMethodToBus() {
      eventBus.$emit('hideCashSelection', this.startPoint)
    },
    onChange(event) {
      this.startPoint = event.target.value
      console.log(this.startPoint)
    },
    showStartingPoint() {
      // send class hide to sister component cashinfo 
      this.hideCash = "hide"
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