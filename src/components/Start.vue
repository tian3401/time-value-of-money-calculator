<template>
  <div>
    <div>
      <img id="green-coin" src='../assets/Green-Coin-Transparent.gif' alt="green coin rotating">
    </div>
    <button
      @click.prevent="handler"
    >Press Me</button> 
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    handler() {
      this.updateComponent(); 
    },
    updateComponent() {
    this.selectedComponent = 'CashIntro';
    this.$emit('update:selectedComponent', this.selectedComponent);
    }
  }
}
</script>

<style scoped>

#green-coin{
  margin: 20px auto;
  width: 200px;
}

input{
  margin: 0px;
  padding: 0px;
  border-radius: 25px 0px 0px 25px;
  font-size: 25px;
}

input [type="text"]
{
  background: #fff;
  padding-left: 0px 25px;
  box-sizing: border-box;
  
}

button {
  margin: 0px;
  padding: 15px;
  background-color:#007bff;
  border: none;
  display: inline;
  position: relative;
  border-radius: 15px;

  cursor: pointer;
  margin: 4px, 2px;
  font-size: 25px;
  color: white;
  box-sizing: border-box;
  transition: 2s;
}

button:hover {
  background-color: green;
}
</style>