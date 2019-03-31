<template>
<span><button class="btn" v-on:click="counter +=1">+</button>
    <span class="counter">{{counter}}</span>
    <button class="btn"  v-on:click="counter -=1">-</button> </span>
</template>
<script>
let counter = 0
export default {
  name: 'IncButton',
  data () {
    return {
      counter: counter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  font-weight: bold;
}

</style>
