import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessageInterface } from '@/interfaces/chat-messages.interfaces';

const messages: ChatMessageInterface[] = [
  { id: 1, isUserMessage: true, message: 'Are you here?' },
  { id: 2, isUserMessage: false, message: 'Nope', image: 'https://hello-world.jpg' },
];

describe('< ChatMessages />', () => {
  const wrapper = mount(ChatMessages, {
    props: {
      messages,
    },
  });

  test('renders chat messages correctly', () => {
    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });
    expect(chatBubbles.length).toBe(messages.length);
  });

  test('scrolls down to the bottom after messages update', async () => {
    const scrollToMockOrSpy = vi.fn();

    // console.log(wrapper.vm.$refs.chatRef);
    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;
    chatRef.scrollTo = scrollToMockOrSpy;

    await wrapper.setProps({
      messages: [...messages, { id: 3, message: 'Hey!', isUserMessage: true }],
    });

    await new Promise((r) => setTimeout(r, 350));

    expect(scrollToMockOrSpy).toHaveBeenCalled();
    expect(scrollToMockOrSpy).toHaveBeenCalledTimes(1);
    expect(scrollToMockOrSpy).toBeCalledWith({
      behavior: 'smooth',
      top: expect.any(Number),
    });
  });
});
