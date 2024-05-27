import type { ChatMessage } from '@/interfaces/chat-messages.interfaces';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([
    {
      id: new Date().getTime() + 1,
      message: 'Are you Jhon Connor?',
      isUserMessage: true,
    },
    {
      id: new Date().getTime(),
      message: 'No',
      isUserMessage: false,
      image: 'https://yesno.wtf/assets/no/14-cb78bf7104f848794808d61b9cd83eba.gif',
    },
  ]);

  const addMessage = (message: string) => {
    const newMessage: ChatMessage = {
      id: new Date().getTime(),
      message: message,
      isUserMessage: true,
    };
    messages.value.push(newMessage);
  };

  return {
    // Properties
    messages,

    // Methods
    addMessage,
  };
};
