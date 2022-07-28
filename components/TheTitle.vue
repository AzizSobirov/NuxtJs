<template>
  <div class="title">
    <h4 v-html="short"></h4>
    <h1 v-html="text"></h1>
  </div>
</template>
<script>
export default {
  props: {
    short: {
      type: String,
      default: "Hello!",
    },
    text: {
      type: String,
      default: "We have Design Experience",
    },
  },
};
</script>
