<template>
  <section>
    <h2>=> 😭👌{{ text }}</h2>
    <h3>Counter {{ count }}</h3>
    <h3>Square: {{ squareComputed }}</h3>

    <div>
      <button @click="decreaseCount">-1</button>
      <button @click="count++">+1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
export default defineComponent({
  props: {
    value: {
      default: 8,
      required: false,
      type: Number,
    },
    text: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const count = ref(props.value);
    const squareComputed = computed(() => count.value * count.value);
    const addCount = () => {
      count.value += 1;
    };

    const decreaseCount = () => {
      count.value--;
    };

    return {
      count,
      squareComputed,
      addCount,
      decreaseCount,
    };
  },
});
</script>

<style scoped>
h1 {
  color: pink;
}
</style>
