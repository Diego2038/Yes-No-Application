import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

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
    const { count, squareComputed, decreaseCount } = useCounter(props.value ?? 4);

    return {
      count,
      squareComputed,
      decreaseCount,
    };
  },
});
