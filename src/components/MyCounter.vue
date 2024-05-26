<template>
  <section>
    <h3>Counter {{ count }}</h3>
    <h3>Square: {{ squareComputed }}</h3>

    <div>
      <button @click="decreaseCount">-1</button>
      <button @click="count++">+1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

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
}
const props = defineProps<Props>();

const count = ref(props.value ?? 4);

const squareComputed = computed(() => count.value * count.value);

const decreaseCount = () => {
  count.value--;
};
</script>

<!-- <script lang="ts">
import { computed, defineComponent, ref } from 'vue';
export default defineComponent({
  props: {
    value: {
      default: 8,
      required: false,
      type: Number,
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
</script> -->

<style scoped>
h1 {
  color: pink;
}
</style>
