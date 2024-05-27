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

<script lang="ts" setup>
import { useCounter } from '@/componsables/useCounter';

console.log('Hola mundooo');
/* const props = defineProps({
  value: {
    type: Number,
    default: 7,
    required: false,
  },
}); */

/* const props = defineProps<{
  value: number;
}>(); 
*/

interface Props {
  value?: number;
  text: string;
}
const props = defineProps<Props>();

// const count = ref(props.value ?? 4);

// const squareComputed = computed(() => count.value * count.value);

// const decreaseCount = () => {
//   count.value--;
// };
const { count, squareComputed, decreaseCount } = useCounter(props.value ?? 4);
</script>

<style scoped>
h1 {
  color: pink;
}
</style>
