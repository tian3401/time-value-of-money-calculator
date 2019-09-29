<template>
  <div >
    <h2 class="gochihandfont">Here are your results!</h2>
  <div class="text-center">
    <p>Congrats and here is your financial java</p>
    <p>You will have ${{tmvInputs.futurevalue}} in {{tmvInputs.time}} years</p>
    <p>if you invest ${{tmvInputs.presentvalue}} at a rate of {{tmvInputs.rate}} which compounds at {{tmvInputs.compoundingPeriods}} per year.</p>
    <img class="coffee" src="../assets/large-coffee-cup.gif" alt="cup of coffee filling up">
  </div>
  </div>
  
</template>

<script>
export default {
  props: {
    tmvInputs: Object
  },
  mounted() {

  }

}
</script>

<style>

</style>