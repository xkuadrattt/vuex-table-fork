<template>
  <button :class="class">{{ title }}</button>
</template>

<script setup>
defineProps(["class", "title"]);
</script>
