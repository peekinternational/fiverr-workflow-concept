<template>
  <div class="card-column">
    <h5 class="card-column-title">{{ title }}</h5>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "card-column",
  props: {
    title: String
  }
};
</script>

<style></style>
