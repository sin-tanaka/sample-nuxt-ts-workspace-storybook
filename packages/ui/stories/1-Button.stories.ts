import { action } from "@storybook/addon-actions";

import Vue from 'vue'
import ElementUI from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import MyButton from "../src/MyButton.vue";
import ElWrapButton from "../src/ElWrapButton.vue";

export default {
  title: "Button",
  components: { MyButton, ElWrapButton },
};

export const Button = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action("clicked") }
});

export const MyElButton = () => ({
  components: { ElWrapButton },
  template: '<el-wrap-button @click="action">Hello Button</el-wrap-button>',
  methods: { action: action("clicked") }
});
