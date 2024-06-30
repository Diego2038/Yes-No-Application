import { describe, expect, test } from 'vitest';
import { useChat } from '@/composables/useChat';
import type { ChatMessageInterface } from '@/interfaces/chat-messages.interfaces';
import type { YesNoResponse } from '@/interfaces/yes-no.response';

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

  test('mock response - fetch API', async () => {
    const message = 'How are you?';

    const mockResponse: YesNoResponse = {
      answer: 'yes',
      forced: true,
      image: 'http://www.image.jpg',
    };

    console.log((window as any).fetch);
    (window as any).fetch = vi.fn(async () => ({
      json: async () => mockResponse,
    }));
    console.log((window as any).fetch);

    const { messages, addMessage } = useChat();

    await addMessage(message);

    await new Promise((r) => setTimeout(r, 1600));

    const [, , , itsMessage] = messages.value;
    expect(itsMessage).toEqual({
      id: expect.any(Number),
      isUserMessage: false,
      message: 'Yes',
      image: mockResponse.image, // Look that that url image comes from the Mock
    });
  });
});
