// import { getApi } from '@/api/callApi';
import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-messages.interfaces';
import type { YesNoResponse } from '@/interfaces/yes-no.response';
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

  const getResponse = async () => {
    // const answer = await getApi.get<YesNoResponse>('/api');
    // console.log(answer);

    const resp = await fetch('https://yesno.wtf/api');
    const data = (await resp.json()) as YesNoResponse;
    return data;
  };

  const addMessage = async (message: string) => {
    if (message.length === 0) return;
    const newMessage: ChatMessage = {
      id: new Date().getTime(),
      message: message,
      isUserMessage: true,
    };
    messages.value.push(newMessage);
    if (!message.endsWith('?')) return;
    const { answer, image } = await getResponse();
    await sleep(2);
    messages.value.push({
      id: new Date().getTime(),
      isUserMessage: false,
      message: answer === 'yes' ? 'Yes' : answer === 'no' ? 'Nope' : 'Who knows 😎',
      image,
    });
  };

  return {
    // Properties
    messages,

    // Methods
    addMessage,
  };
};
