<template>
  <div class="card-task" :class="[type && `card-${type}`]">
    <div class="card-options">
      <dropdown tag="div">
        <button
          aria-label="Settings menu"
          data-toggle="dropdown"
          class="btn-link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather-more-horizontal"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>
        <ul class="dropdown-menu dropdown-menu-right">
          <a href="#" class="dropdown-item" @click="$emit('remove')">Remove</a>
        </ul>
      </dropdown>
    </div>
    <div class="card-body">
      <div class="card-image" v-if="$slots.image">
        <slot name="image"></slot>
      </div>
      <div class="card-info" v-if="$slots.info">
        <slot name="info"></slot>
      </div>
    </div>
    <div class="card-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown";

export default {
  name: "task-card",
  components: {
    Dropdown
  },
  props: {
    title: String,
    type: String
  }
};
</script>

<style></style>
