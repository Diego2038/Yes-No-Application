import { computed, ref, defineComponent } from 'vue';

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
    const count = ref(props.value ?? 4);

    const squareComputed = computed(() => count.value * count.value);

    const decreaseCount = () => {
      count.value--;
    };

    return {
      count,
      squareComputed,
      decreaseCount,
    };
  },
});
