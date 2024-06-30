import ChatBubble from '@/components/chat/ChatBubble.vue';
import { mount } from '@vue/test-utils';
import { expect, test, describe } from 'vitest';

describe('< ChatBubble />', () => {
  test('renders owr message correctly', () => {
    const message = 'Hello world';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        isUserMessage: true,
      },
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
    // expect(wrapper.find('div').text()).toContain(message);
    expect(wrapper.find('.bg-blue-200').text()).toContain(message);
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
  });

  test('renders received message correctly', () => {
    const message = 'Nope';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        isUserMessage: false,
      },
    });
    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('img').exists()).toBeFalsy();
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();
  });

  test('received message should contain an image', () => {
    const message = 'Nope';
    const image = 'example.jpg';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        isUserMessage: false,
        image,
      },
    });
    expect(wrapper.find('img').exists()).toBeTruthy();
    expect(wrapper.find('img').attributes('src')).toBe(image);
  });
});
