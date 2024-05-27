import { computed, ref } from 'vue';

// const count = ref(0); // OJO, si está afuera del componsable, se vuelve una variable global

export const useCounter = (value: number = 13) => {
  const count = ref(value); // OJO, si está afuera del componsable, se vuelve una variable global

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
};
