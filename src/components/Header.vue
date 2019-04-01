<template>
  <div id="head">
    <span>
      <img src="@/assets/boylie.png">
    </span>
    <span>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Gastgeber" label-for="input-1" description>
          <b-form-select id="input-1" v-model="$props.gastgeber" :options="jungs" required></b-form-select>
        </b-form-group>
        <b-form-group id="input-group-2" label="Monat:" label-for="input-2" description>
          <b-form-select id="input-2" v-model="$props.monat" :options="monate" required></b-form-select>
        </b-form-group>
        <b-form-group id="input-group-3" label="Jahr:" label-for="input-3" description>
          <b-form-select id="input-2" v-model="$props.jahr" :options="jahre" required></b-form-select>
        </b-form-group>
      </b-form>vu
    </span>
    <span>
      <img src="@/assets/25.png">
    </span>
  </div>
</template>

<script>
import db from '../firebaseConfigured'
import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

export default {
  name: 'Header',
  data () {
    return {
      props: {
        monat: {required: true},
        jahr: {required: true},
        gastgeber: {required: true}
      },

      jahre: [
        { text: 'Select One', value: null },
        '2019',
        '2020',
        '2021',
        '2022'
      ],
      monate: [
        { text: 'Select One', value: null },
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
      jungs: []
    }
  },
  firestore: {
    jungs: db.collection('jungs')
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
