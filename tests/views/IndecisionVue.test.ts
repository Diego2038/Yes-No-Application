import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import IndecisionVue from '@/views/IndecisionVue.vue';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';

const mockChatMessages = {
  template: '<div data-testid="mock-messages">Mock ChatMessages</div>',
};

describe('< IndecisionVue />', () => {
  test('renders chat messages and message box correctly', () => {
    const wrapper = mount(IndecisionVue);

    expect(wrapper.html()).toMatchSnapshot;

    expect(wrapper.findComponent(ChatMessages).exists()).toBeTruthy();
    expect(wrapper.findComponent({ name: 'MessageBox' }).exists()).toBeTruthy();
  });

  test('calls emitMessage when sending a message', async () => {
    const wrapper = mount(IndecisionVue, {
      global: {
        stubs: {
          ChatMessages: mockChatMessages,
        },
      },
    });

    // Simulate the custom event

    const messageBoxComponent = wrapper.findComponent(MessageBox);

    messageBoxComponent.vm.$emit('emitMessage', 'Hello world');

    // Important: This is an alternative to use a mock function to imit scrollTo

    await new Promise((r) => setTimeout(r, 350));
    // console.log(wrapper.html()); // note that mockChatMessages' template was set in the HTML
    expect(wrapper.html()).toMatchSnapshot();
  });
});
