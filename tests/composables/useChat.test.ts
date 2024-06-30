import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { useChat } from '@/composables/useChat';
import { ChatMessageInterface } from '@/interfaces/chat-messages.interfaces';

describe('useChat composable', () => {
  test('add message correctly when addMessage is called', async () => {
    const message = 'Hello world';
    const { messages, addMessage } = useChat();
    await addMessage(message);
    expect(messages.value.length).toBe(3);
    expect(messages.value[2].message).toEqual(message);
    expect(messages.value[2]).toStrictEqual<ChatMessageInterface>({
      id: expect.any(Number),
      message,
      isUserMessage: true,
    });
  });

  test('add nothing if text is empty', async () => {
    const message = '';
    const { messages, addMessage } = useChat();
    await addMessage(message);
    expect(messages.value.length).toBe(2);
  });

  test('gets its response correctly when message ends with "?"', async () => {
    const message = 'How are you?';
    const { messages, addMessage } = useChat();
    await addMessage(message);
    await new Promise((r) => setTimeout(r, 2000));
    expect(messages.value.length).toBe(4);
    const [, , myMessage, theOtherMessage] = messages.value;
    expect(myMessage).toStrictEqual<ChatMessageInterface>({
      id: expect.any(Number),
      isUserMessage: true,
      message,
    });
    expect(theOtherMessage).toStrictEqual<ChatMessageInterface>({
      id: expect.any(Number),
      isUserMessage: false,
      message: expect.any(String),
      image: expect.any(String),
    });
  });
});
