<template>
  <div>
    <h2 class="gochihandfont">Starting Cash or Ending Cash?</h2>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">$</span>
      </div>
      <input 
      type="number"
      class="form-control" 
      id="startingCash"
      placeholder="starting cash"
      v-if="start"
      v-model="startingCash"
      >
      <input 
    type="number" 
    class="form-control" 
    id="endingCash"
    placeholder="ending cash"
    v-if="end"
    v-model="endingCash"
    >
    </div>
    <button class="btn btn-success" 
    @click.prevent ="handler"
    >cash it</button>
  </div>
</template>

<script>
import MaskedInput from 'vue-masked-input'
export default {
  props: {
    intro: String,
    tmvInputs: Object,
    selectedComponent: [String, Object],
  },
  data() {
    return {
      start: undefined,
      end: undefined
    }
  },
  mounted () {
    console.log("cash info has been mounted")
    this.updateIntro();      
  },
  methods: {
    handler() {
      this.updateComponent();
      this.updateInput(); 

    },
    updateComponent() {
      this.selectedComponent = 'TimeDuration'
      this.$emit('update:selectedComponent',this.selectedComponent)
      console.log(this.selectedComponent)
    },
    updateIntro() {
      switch(this.intro) {
        case 'start':
          this.start = true
          console.log(`value of start changed to true`)
          break
          
        case 'end':
          this.end = true
          console.log(`value of end changed to true`)
          break
      }
    },
    updateInput() {
      this.$emit('update:futurevalue', this.endingCash)
      this.$emit('update:presentvalue', this.startingCash)
      console.log(this.endingCash, this.tmvInputs);
    },
    onlyCurrency($event) {
      //still working on this
    }
  },
  components: {
    "masked-input":MaskedInput
  }
}
</script>

<style>
</style>