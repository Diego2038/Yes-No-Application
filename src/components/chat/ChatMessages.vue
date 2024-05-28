<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <!-- Example Message -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
      <!-- <ChatBubble :is-user-message="true" :message="'Holis'" />
      <ChatBubble :is-user-message="false" :message="'Saludos'" />
      <ChatBubble
        :is-user-message="false"
        message="No"
        image="https://yesno.wtf/assets/no/26-34b31d1f0777f70c61488f67a36576a9.gif"
      /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatBubble from '@/components/chat/ChatBubble.vue';
import type { ChatMessage } from '@/interfaces/chat-messages.interfaces';
import { ref, watch } from 'vue';

interface Props {
  messages: ChatMessage[];
}

const { messages } = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null);

watch(messages, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight + 52,
      behavior: 'smooth',
    });
  }, 200);
});
</script>
