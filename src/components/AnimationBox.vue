<template>
  <div>
    
    <!-- <CoffeeCup></CoffeeCup> -->

    <img class="coffee" v-if="selectedComponent == 'Results'" src="../assets/large-coffee-cup.gif" alt="cup of coffee filling up">
  </div>
</template>

<script>
import CoffeeCup from './CoffeeCup'
export default {
  props: {
    selectedComponent: [String, Object]
  },
  methods:{
    showAnimation() {
      return 
    },
  },
  components: {
  CoffeeCup: CoffeeCup
  }
}
</script>

<style scoped>
  img{
    padding: 0px;
  }
  div{
    height: auto;
    width: auto; 
  }

  .coffee{
    width: auto;
  }
</style>>

