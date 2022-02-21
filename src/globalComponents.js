import BaseButton from "./components/BaseButton.vue";
import DropDown from "./components/Dropdown.vue";

import "@/assets/scss/app.scss";

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("base-button", BaseButton);
    Vue.component("drop-down", DropDown);
  }
};

export default GlobalComponents;
