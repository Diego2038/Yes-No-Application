import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';
import { test, describe, expect } from 'vitest';

describe('< MessageBox />', () => {
  const wrapper = mount(MessageBox);

  test('renders input and button elements correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy();
    expect(wrapper.find('button').exists()).toBeTruthy();
    expect(wrapper.find('button svg').exists()).toBeTruthy();
    // console.log(wrapper.find('button').attributes('class'));
  });

  test('emits sendMessage event when buttons is clicked with message value', async () => {
    const message = 'Hello world';
    await wrapper.find('input[type="text"]').setValue(message);
    await wrapper.find('button').trigger('click');
    // console.log(wrapper.emitted());
    // console.log(wrapper.emitted().emitMessage);
    // console.log(wrapper.emitted('emitMessage'));
    expect(wrapper.emitted('emitMessage')).toBeTruthy();
    expect(wrapper.emitted('emitMessage')?.[0]).toEqual([message]);
    expect((wrapper.vm as any).message).toBe('');
  });

  test("Doesn't emit sendMessage event when keyup.enter is triggered if message value is void", async () => {
    const wrapper = mount(MessageBox);
    // const message = '';
    const input = wrapper.find('input');
    // await input.setValue(message);
    await input.trigger('keyup.enter');

    expect(wrapper.emitted('sendMessage')).toBeFalsy();
  });
});
