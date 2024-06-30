import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';

import MyCounter from '@/components/MyCounter.vue';

describe(' < MyCounter />', () => {
  test('Should match the snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
        text: 'a',
      },
    });
    // console.log(wrapper.html());
    expect(wrapper).toMatchSnapshot();
  });

  test('Renders the counter value correctly ', () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value,
        text: 'AAA',
      },
    });

    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    console.log(wrapper.find('h3').text());
    expect(wrapper.find('h3').text()).toContain(`Counter ${value}`);
    console.log(wrapper.find('[data-testid="square-label"]').text());
    expect(wrapper.find('[data-testid="square-label"').text()).toContain(
      `Square: ${value * value}`,
    );

    expect(counterLabel.text()).toContain(`Counter ${value}`);
    expect(squareLabel.text()).toContain(`Square: ${value * value}`);
  });

  test('increments the counter when +1 button is clicked', async () => {
    const value = 5;

    const wrapper = mount(MyCounter, {
      props: {
        value,
        text: 'AAA',
      },
    });

    const [, increaseButton] = wrapper.findAll('button');

    await increaseButton.trigger('click');
    console.log(increaseButton.html());

    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    expect(counterLabel.text()).toContain(`Counter ${value + 1}`);
    expect(squareLabel.text()).toContain(`Square: ${(value + 1) * (value + 1)}`);
  });

  test('Decrements the counter when -1 button is clicked twice', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value,
        text: 'AAA',
      },
    });

    const decreasedButton = wrapper.find('button');
    await decreasedButton.trigger('click');
    await decreasedButton.trigger('click');

    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    expect(counterLabel.text()).toContain(`Counter ${value - 2}`);
    expect(squareLabel.text()).toContain(`Square: ${(value - 2) * (value - 2)}`);
  });
});
