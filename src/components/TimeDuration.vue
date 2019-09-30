<template>
<div>
  <h2 class="gochihandfont">How long will you be investing this cash?</h2>
  <input 
  type="text" 
  class="form-control" 
  placeholder="number of years"
  v-model="timeDuration"
  >
  <button 
  class="btn btn-success"
  @click.prevent="handler"
  >Looks Right</button>
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
      timeDuration: null,
    }
  },
  methods: {
    handler() {
      this.updateComponent(); 
      this.updateInput(); 
    },
    updateComponent() {
      this.selectedComponent = 'Rate'
      this.$emit('update:selectedComponent',this.selectedComponent)
      console.log(this.selectedComponent)
    },
    updateInput() {
      this.$emit('update:timeDuration', this.timeDuration)
      console.log(this.timeDuration, this.tmvInputs);
    }
  }
}
</script>

<style>
</style>