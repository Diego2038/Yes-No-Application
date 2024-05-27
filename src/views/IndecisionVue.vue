<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!-- ChatMessages-->
    <ChatMessages :messages="messages" />

    <!-- MessageBox-->
    <MessageBox />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import { type ChatMessage } from '../interfaces/chat-messages.interfaces';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime() + 1,
    message: 'Are you Jhon Connor?',
    isUserMessage: true,
  },
  {
    id: new Date().getTime(),
    message: 'Nope',
    isUserMessage: false,
    image: 'https://yesno.wtf/assets/no/14-cb78bf7104f848794808d61b9cd83eba.gif',
  },
]);
</script>
