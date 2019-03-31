<template>
  <div id="head">
    <span>
      <img src="@/assets/boylie.png">
    </span>
    <span>
      <label for="jahr">Jahr</label>
      <select id="jahr" v-model="jahr">
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
      <label for="monat">Monat</label>
      <select id="monat" v-model="monat">
        <option value="1">Januar</option>
        <option value="2">Februar</option>
        <option value="3">März</option>
        <option value="4">April</option>
        <option value="5">Mai</option>
        <option value="6">Juni</option>
        <option value="7">Juli</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">Oktober</option>
        <option value="11">November</option>
        <option value="12">Dezember</option>
      </select>
      <div v-for="k in jungs" :key="k.name">
          {{ k.name }}
      </div>
      <label for="gastgeber">Gastgeber</label>
      <select id="gastgeber" v-model="gastgeber" >
        <option v-for="k in jungs" :key="k.name" :value="key">{{k.name}}</option>
      </select>
    </span>
    <span>
      <img src="@/assets/25.png">
    </span>
  </div>
</template>

<script>
import backend from '@/services/backend'
let jungsRef = backend.db.ref('jungs')
let monat
let jahr
let gastgeber

export default {
  name: 'Header',
  data () {
    return {
      monat: monat,
      jahr: jahr,
      gastgeber: gastgeber
    }
  },
  firebase: {
    jungs: jungsRef
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
