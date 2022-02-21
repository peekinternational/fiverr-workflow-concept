<template>
  <nav class="navbar">
    <div class="container">
      <a class="navbar-brand" href="javascript:void(0)">{{ title }}</a>

      <div class="collapse navbar-collapse show text-left" v-show="showMenu">
        <ul class="navbar-nav navbar-nav-start">
          <li>
            <a href="javascript:void(0)" class="nav-link">Dashboard</a>
          </li>
          <li>
            <a href="javascript:void(0)" class="nav-link">Messages</a>
          </li>
          <li>
            <a href="javascript:void(0)" class="nav-link active">Orders</a>
          </li>
          <li>
            <a href="javascript:void(0)" class="nav-link">Gigs</a>
          </li>
          <li>
            <a href="javascript:void(0)" class="nav-link">Analytics</a>
          </li>
          <li>
            <a href="javascript:void(0)" class="nav-link">Earnings</a>
          </li>
        </ul>
      </div>

      <a
        href="javascript:void(0)"
        class="nav-link nav-link-avatar navbar-nav-end"
      >
        <span class="avatar avatar-active">
          <img
            src="../assets/img/avatar.jpg"
            class="avatar-img"
            alt="User avatar"
          />
        </span>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        @click="toggleMenu"
        data-toggle="collapse"
        data-target="#navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "base-nav",
  props: {
    expand: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    contentId: {
      type: [String, Number],
      default: Math.random().toString()
    }
  },
  methods: {
    closeMenu() {
      this.toggled = false;
    },
    toggleMenu(){
      this.showMenu = !this.showMenu;
    }
  },
  data() {
    return {
      showMenu: false
    }
  }
};
</script>

<style></style>
