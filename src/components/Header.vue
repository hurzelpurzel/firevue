<template>
  <b-row id="head" >
    <b-col >
      <img src="@/assets/boylie.png">
    </b-col>
    <b-col  cols=6>
      <div class="margin">
          <b-form-select id="input-1" v-model="gastgeber" :options="jungs" required></b-form-select>
      </div>
       <div class="margin">
          <b-form-select id="input-2" v-model="monat" :options="monate" required></b-form-select>
      </div>

       <div class="margin">
          <b-form-select id="input-2" v-model="jahr" :options="jahre" required></b-form-select>
      </div>

    </b-col>
    <b-col  >

      <img src="@/assets/25.png">
    </b-col>
  </b-row>
</template>

<script>
// eslint-disable-next-line
import db from '../firebaseConfigured'
import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)
let monat = '4'
let jahr = '2019'
let gastgeber = null

export default {
  name: 'Header',
  data () {
    return {

      jahre: [
        '2019',
        '2020',
        '2021',
        '2022'
      ],
      monate: [
        { text: 'Januar', value: '1' },
        { text: 'Februar', value: '2' },
        { text: 'März', value: '3' },
        { text: 'April', value: '4' },
        { text: 'Mai', value: '5' },
        { text: 'Juni', value: '6' },
        { text: 'Juli', value: '7' },
        { text: 'August', value: '8' },
        { text: 'September', value: '9' },
        { text: 'Oktober', value: '10' },
        { text: 'November', value: '11' },
        { text: 'Dezember', value: '12' }
      ],
      monat: monat,
      jahr: jahr,
      gastgeber: gastgeber,
      jungs: [{ text: 'Gastgeber', value: null }]
    }
  },
  firestore: {
    jungs: []
  }
}
</script>

<style scoped>
.margin {
  margin: 5px;
}
</style>
