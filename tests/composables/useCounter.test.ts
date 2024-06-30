import { describe, expect, test } from 'vitest';
import { useCounter } from '../../src/composables/useCounter';

test('useCounter Composable', () => {
  describe('The number and its square should be a default value (5)', () => {
    const { count, squareComputed } = useCounter();
    expect(count).toBe(13);
    expect(squareComputed).toBe(13 * 13);
  });

  describe('The number should be equal to the parameter', () => {
    const value = 5;
    const { count } = useCounter(value);
    expect(count).toBe(value);
  });

  describe('The number should have the square value correctly', () => {
    const value = 5;
    const { squareComputed } = useCounter(value);
    expect(squareComputed).toBe(value * value);
  });

  describe('The number and its square should be increased correctly', () => {
    const value = 5;
    const { count, squareComputed, addCount } = useCounter(value);
    addCount();
    expect(count).toBe(value + 1);
    expect(squareComputed).toBe((value + 1) * (value + 1));
  });

  describe('The number and its square should be decreased correctly', () => {
    const value = 5;
    const { count, squareComputed, decreaseCount } = useCounter(value);
    decreaseCount();
    expect(count).toBe(value - 1);
    expect(squareComputed).toBe((value - 1) * (value - 1));
  });
});
