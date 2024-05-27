<template>
  <section>
    <h2>=> 😭👌{{ text }}</h2>
    <h3>Counter {{ count }}</h3>
    <h3>Square: {{ squareComputed }}</h3>

    <div>
      <button class="btn" @click="decreaseCount">-1</button>
      <button class="btn" @click="count++">+1</button>
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
.btn {
  @apply p-5 bg-blue-500 rounded mr-3 hover:bg-blue-700;
}
</style>
