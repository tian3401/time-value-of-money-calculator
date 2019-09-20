<template>
  <div>
    <h2 class="gochihandfont">Starting Cash or Ending Cash?</h2>
    <input type="text" 
    class="form-control" 
    placeholder="starting cash"
    v-model="startingCash"
    >
    <input type="text" 
    class="form-control" 
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
export default {
  props: {
    tmvInputs: Object,
    selectedComponent: [String, Object],
    changeComponent: Function 
  },
  data() {
    return {
      startingCash: null,
      endingCash: null
    }
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
    updateInput() {
      this.$emit('update:futurevalue', this.endingCash)
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