<template>
  <div id="app">
    <tab-bar></tab-bar>
    <router-view />
  </div>
</template>
<script>
import TabBar from "./components/common/tabbar/TabBar";
export default {
  components: {
    TabBar
  },
  mounted() {
    window.onload = function() {
      let htmlWidth =
        document.documentElement.clientWidth || document.body.clientWidth;
      let html = document.getElementsByTagName("html")[0];
      html.style.fontSize = htmlWidth / 10 + "px";
      window.addEventListener("resize", e => {
        let htmlWidth =
          document.documentElement.clientWidth || document.body.clientWidth;
        html.style.fontSzie = htmlWidth / 10 + "px";
      });
    };
  }
};
</script>
<style lang="scss">
@import "./assets/css/reset.css";
</style>
