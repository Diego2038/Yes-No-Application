<template>
  <h1>Mi primera app</h1>
  <MyCounter :text="'Holis'" />
  <MyCounterScript :text="'Soy un script xd'" />
  <MyCounterScript2 :text="'CounterScript2'" :value="45" />
</template>

<script setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>

<!-- <script>
import { defineComponent } from 'vue';
import MyCounter from './components/MyCounter.vue';
export default defineComponent({
  components: {
    MyCounter,
  },
});
</script> -->
