<template>
  <div>
    <h2 class="gochihandfont">Starting Cash or Ending Cash?</h2>
    <input type="text" 
    class="form-control" 
    id="startingCash"
    placeholder="starting cash"
    v-if="start"
    v-model="startingCash"
    >
    <input type="text" 
    class="form-control" 
    id="endingCash"
    placeholder="ending cash"
    v-if="end"
    v-model="endingCash"
    >
    <button class="btn btn-success special-button" 
    @click.prevent ="handler"
    >cash it</button>
    <p>{{tmvInputs}}</p>
    <p>This is the value of intro prop {{intro}}</p>
    <p>this is selected components {{selectedComponent}}</p>
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