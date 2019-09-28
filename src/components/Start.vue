<template>
  <div>
    <h3>Welcome!</h3>
    <input type="text" placeholder="What's your name?">
    <button>Let's Get Started</button>
    <img src='../assets/Green-Coin-Transparent.gif' alt="green coin rotating">
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>

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
  padding: 2px;
  background-color:#007bff;
  border: none;
  display: inline;
  position: relative;
  border-radius: 0px 25px 25px 0px;
  cursor: pointer;
  margin: 4px, 2px;
  font-size: 25px;
  color: white;
  box-sizing: border-box;
  transition: 2s;
}

</style>