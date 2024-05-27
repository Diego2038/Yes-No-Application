<template>
  <section>
    <h2>=> 😭👌{{ text }}</h2>
    <h3>Counter {{ count }}</h3>
    <h3>Square: {{ squareComputed }}</h3>

    <div>
      <button @click="decreaseCount" class="btn btn-secondary">-1</button>
      <button @click="count++" class="btn btn-primary">+1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2"></script>
