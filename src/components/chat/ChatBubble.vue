<template>
  <!-- <div :class="{ flex: true, 'justify-end': isUserMessage }">
    <div
      :class="[
        isUserMessage ? 'bg-blue-200' : 'bg-gray-300',
        'text-black',
        'p-2',
        'rounded-lg',
        'max-w-xs',
      ]"
    >
      {{ message }}
    </div>
  </div> -->

  <!-- Message user -->
  <div class="flex justify-end" v-if="isUserMessage">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
      {{ message }}
    </div>
  </div>

  <!-- recivied user -->
  <div class="flex" v-else>
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">{{ message }}</span>
      <img v-if="image" :src="image" alt="YesNoImage" class="w-52 h-52 object-cover rounded-md" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message: string;
  isUserMessage: boolean;
  image?: string;
}
defineProps<Props>();
</script>
