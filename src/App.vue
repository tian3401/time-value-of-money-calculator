<template>
  <div  class="container-fluid">
    <h1 class="gochihandfont">{{heading}}</h1>
      <div class="row">
        <form>
          <div class="col-lg ">
            <div class="form-group dynamic-asset form-inline">
              <component :is= "selectedComponent" 
              @update:intro = "intro = $event"
              @update:selectedComponent = "selectedComponent = $event"
              :tmvInputs ="tmvInputs"
              :intro="intro"
              @update:futurevalue = "tmvInputs.futurevalue = $event"
              @update:presentvalue = "tmvInputs.presentvalue = $event"
              @update:timeDuration = "tmvInputs.time = $event"
              @update:rate = "tmvInputs.rate = $event"
              @update:compoundingPeriods = "tmvInputs.compoundingPeriods = $event"
              ></component>
            </div>
            <div id="tmv-inputs" v-if = '!seen'>
              <div class="form-group">
              <label for="FV">Future Value</label>
              <input
                type="text"
                id="future-value"
                class="form-control"
                v-model="tmvInputs.futurevalue"
              >
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
            </div>
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
            <button
              class="btn btn-primary" @click.prevent="showTmvInputs">
              Show TMV Inputs
            </button>
          </div>
        </form>
        <div class="col-lg mybox">
            <animation-box></animation-box>
            
        </div>
    </div>
  </div>
</template>

<script>
import AnimationBox from './components/AnimationBox'
import CashIntro from './components/CashIntro'
import CashInfo from './components/CashInfo'
import TimeDuration from './components/TimeDuration'
import Rate from './components/Rate'
import CompoundingPeriods from './components/CompoundingPeriods'
import Results from './components/Results'
import CoffeeCup from './components/CoffeeCup'
import Intro from './components/Start'


export default {
  data () {
    return {
      heading: 'The Money Calculator',
      intro: '',
      tmvInputs: {
        futurevalue: null,
        presentvalue: null,
        rate: '',
        compoundingPeriods: null,
        time: null
      },
      seen: false,
      selectedComponent: 'Intro'
    }
  },
  methods: {
    showTmvInputs() {
      console.log(this.tmvInputs)
    },
    calculateFV() {
      let percentageRate = this.tmvInputs.rate / 100;
      let periods = this.tmvInputs.compoundingPeriods;
      let compoundingFactor = periods*this.tmvInputs.time;
      let startingCash = this.tmvInputs.presentvalue;

      this.tmvInputs.futurevalue = (startingCash*(1 + (percentageRate/periods))**(compoundingFactor)).toFixed(2); 

      this.tmvInputs.presentvalue.toFixed(2);
    
    },
    calculatePV() {
      let percentageRate = this.tmvInputs.rate / 100;
      let periods = this.tmvInputs.compoundingPeriods; 
      let compoundingFactor = this.tmvInputs.compoundingPeriods*this.tmvInputs.time;
      let endingCash = this.tmvInputs.futurevalue;

      this.tmvInputs.presentvalue = (endingCash / (1+ percentageRate /periods)**(compoundingFactor)).toFixed(2);
      
      this.tmvInputs.futurevalue.toFixed(2); 
    },
    calculateTime() {
      let percentageRate = this.tmvInputs.rate / 100; 

      this.tmvInputs.time = ((Math.log10(this.tmvInputs.futurevalue) - Math.log10(this.tmvInputs.presentvalue))/ Math.log10(1 + percentageRate)).toFixed(2);

      console.log('log of fv', Math.log10(this.tmvInputs.futurevalue), typeof(this.tmvInputs.futurevalue))
    }
  },
  components: {
    Intro: Intro,
    AnimationBox: AnimationBox,
    CashIntro: CashIntro,
    CashInfo: CashInfo,
    TimeDuration: TimeDuration,
    Rate: Rate,
    CompoundingPeriods: CompoundingPeriods,
    Results: Results
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Gochi+Hand|Luckiest+Guy&display=swap');

/* .container-fluid{
  background-color:skyblue
} */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  font-weight: normal;
  text-align: center;
} 

.gochihandfont{
  font-family:'Gochi Hand', serif
}

button{
  margin: 10px;
}

.mybox{
  border-width: thick;
  border-color: black;
}

</style>
