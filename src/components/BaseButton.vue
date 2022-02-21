<template>
  <component
    :is="tag"
    :type="tag === 'button' ? nativeType : ''"
    @click="handleClick"
    class="btn"
  >
    <slot name="loading">
      <i v-if="loading" class="fas fa-spinner fa-spin"></i>
    </slot>
    <slot></slot>
  </component>
</template>
<script>
export default {
  name: "base-button",
  props: {
    tag: {
      type: String,
      default: "button"
    },
    nativeType: {
      type: String,
      default: "button"
    },
    round: Boolean,
    icon: Boolean,
    block: Boolean,
    disabled: Boolean,
    loading: Boolean,
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: ""
    },
    simple: {
      type: Boolean
    },
    link: {
      type: Boolean
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>

<style></style>
