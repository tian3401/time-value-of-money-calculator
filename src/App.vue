<template>
  <div id="app" class="container">
    <h1>The Time Value of Money Calculator</h1>
    <form>
      <div class="row">
        <div class="col-xs-6 col-sm-4 col-md-6 col-md-offset-3">
          <h2>Please input your settings</h2>
          <div class="form-group">
            <label for="FV">Future Value</label>
            <input
              type="text"
              id="future-value"
              class="form-control"
              v-model="tmvInputs.futurevalue">
          </div>
          <div class="form-group">
            <label for="PV">Present Value</label>
            <input 
              type="text"
              id="present-value"
              class="form-control"
              v-model="tmvInputs.presentvalue">
          </div>
          <div class="form-group">
            <label for="rate">Interest Rate</label>
            <input 
              type="text"
              id="rate"
              class="form-control"
              v-model="tmvInputs.rate">
          </div>
          <div class="form-group">
            <label for="compoundingPeriods">Compounding Periods</label>
            <input 
              type="text"
              id="compounding-periods"
              class="form-control"
              v-model="tmvInputs.compoundingPeriods">
          </div>
          <div class="form-group">
            <label for="time">Time</label>
            <input 
              type="text"
              id="time"
              class="form-control"
              v-model="tmvInputs.time">
          </div>
        <div class="col-xs-6 col-sm-4 col-md-6 col-md-offset-3">
          <animation-box></animation-box>
        </div>
        </div>
        
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button
            class="btn btn-primary" @click.prevent="calculateFV">
            Calculate Future Value
          </button>
          <button
            class="btn btn-primary" @click.prevent="calculatePV">
            Calculate Present Value
          </button>
          <button
            class="btn btn-primary" @click.prevent="calculateTime">
            Calculate Time
          </button>
        </div>
      </div>

    </form>
    

  </div>
</template>

<script>
import AnimationBox from './components/AnimationBox'

export default {
  data () {
    return {
      heading: 'Time Value of Money Calculator',
      tmvInputs: {
        futurevalue: 1000,
        presentvalue: 1000,
        rate: '5',
        compoundingPeriods: 1,
        time: 1
      }
    }
  },
  methods: {
    calculateFV() {

      let percentageRate = this.tmvInputs.rate / 100;
      let compoundingFactor = this.tmvInputs.compoundingPeriods*this.tmvInputs.time;
    
      this.tmvInputs.futurevalue = (this.tmvInputs.presentvalue*(1 + (percentageRate/this.tmvInputs.compoundingPeriods))**(compoundingFactor)); 

    },
    calculatePV() {

      let percentageRate = this.tmvInputs.rate / 100;
      let compoundingFactor = this.tmvInputs.compoundingPeriods*this.tmvInputs.time;

      this.tmvInputs.presentvalue = this.tmvInputs.futurevalue / (1+ percentageRate /this.tmvInputs.compoundingPeriods)**(compoundingFactor); 
    },
    calculateTime() {
      
      let percentageRate = this.tmvInputs.rate / 100; 

      this.tmvInputs.time = ((Math.log10(this.tmvInputs.futurevalue) - Math.log10(this.tmvInputs.presentvalue))/ Math.log10(1 + percentageRate)).toFixed(2);

      console.log('log of fv', Math.log10(this.tmvInputs.futurevalue), typeof(this.tmvInputs.futurevalue))
    }
  },
  components: {
    AnimationBox: AnimationBox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  font-weight: normal;
  text-align: center;
} 

</style>
