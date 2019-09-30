<template>
  <div >
    <h2 class="gochihandfont">Here are your results!</h2>
  <div class="text-center">
    <p>Have a cup of java with your results!</p>
    <p>You will have <span id="cash">${{tmvInputs.futurevalue}} </span>in <span class="tmvinfo">{{tmvInputs.time}} </span>years</p>
    <p>if you invest <span class="tmvinfo">${{tmvInputs.presentvalue}} </span> at a rate of  <span class="tmvinfo"> {{tmvInputs.rate}}% </span> which compounds at <span class="tmvinfo">{{tmvInputs.compoundingPeriods}}x </span> per year.</p>
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

#cash{
  font-size: 25px;
  font-weight: bolder;
}

#cash:hover{
  color:rgb(76, 175, 76);
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.tmvinfo{
  font-weight: bold;
}

</style>