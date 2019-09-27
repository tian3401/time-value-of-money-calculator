<template>
  <div>
    
    <!-- <CoffeeCup></CoffeeCup> -->
    <img class="coffee" src="../assets/large-coffee-cup.gif" alt="cup of coffee filling up">
  </div>
</template>

<script>
import CoffeeCup from './CoffeeCup'
export default {
  data() {
    return {
      
    }
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
  div{
    height: auto;
    width: auto; 
  }

  .coffee{
    width: 80%;
  }
</style>>

