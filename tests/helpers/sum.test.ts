// sum.test.js
import { expect, test, describe } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    // Preparación
    const a = 1;
    const b = 2;

    // Estímulo
    const res = sum(a, b);

    // Comportamiento esperado
    expect(res).toBe(a + b);

    // expect(sum(1, 2)).toBe(3); // Son equivalentes
    // if (sum(1, 2) !== 4) {
    //   throw new Error('La suma no es correcta');
    // }
  });
});

describe('addArray function', () => {
  test('It should sum all numbers', () => {
    // Preparación
    const n1 = 1;
    const n2 = 2;
    const n3 = 3;
    const n4 = 4;
    const arr = [n1, n2, n3, n4];

    // Estimulo
    const res = addArray(arr);

    // Comportamiento esperado
    expect(res).toBe(n1 + n2 + n3 + n4);
  });

  test('It should be a diffent number', () => {
    // Preparación
    const n1 = 1;
    const n2 = 2;
    const n3 = 3;
    const n4 = 4;
    const arr = [n1, n2, n3, n4];

    // Estimulo
    const res = addArray(arr);

    // Comportamiento esperado
    expect(res).not.toBe(n1 + n2 + n3 + n1);
  });

  test('It should be zero if the array is void', () => {
    // Preparación
    const arr = [];

    // Estimulo
    const res = addArray(arr);
    // console.log({ res });

    // Comportamiento esperado
    expect(res).toBe(0);
  });
});
