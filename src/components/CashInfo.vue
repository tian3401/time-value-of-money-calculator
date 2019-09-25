<template>
  <div>
    <h2 class="gochihandfont">Starting Cash or Ending Cash?</h2>
    <input type="text" 
    class="form-control" 
    id="startingCash"
    placeholder="starting cash"
    v-model="startingCash"
    >
    <input type="text" 
    class="form-control" 
    id="endingCash"
    placeholder="ending cash"
    v-model="endingCash"
    >
    <button class="btn btn-success special-button" 
    @click.prevent ="handler"
    >cash it</button>
    <p>{{tmvInputs}}</p>
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
      startingCash: null,
      endingCash: null
    }
  },
  mounted() {
    eventBus.$on('hideCashSelection', function(startPoint) {
      console.log('got the payload', startPoint); // doesnt work because doesn't mounted before I emit to eventBus
    })
  },
  methods: {
    handler() {
      this.updateComponent();
      this.updateInput(); 
    },
    showStartingPoint() {
      //receive info from sister component cashintro 
    },
    updateComponent() {
      this.selectedComponent = 'TimeDuration'
      this.$emit('update:selectedComponent',this.selectedComponent)
      console.log(this.selectedComponent)
    },
    updateInput() {
      this.$emit('update:futurevalue', this.endingCash)
      this.$emit('update:presentvalue', this.startingCash)
      console.log(this.endingCash, this.tmvInputs);
    }
  }
}
</script>

<style>
  input{
    margin: 20px; 
  }
  .special-button{
    margin: 20px
  }
</style>