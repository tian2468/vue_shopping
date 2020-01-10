<template>
  <div class="tabbar">
    <tab-bar-item path="/home">
      <img slot="icon" src="@/assets/img/index.png" alt />
      <img slot="iconCurrent" src="@/assets/img/index_current.png" alt />
      <p slot="text">首页</p>
    </tab-bar-item>
    <tab-bar-item path="/my">
      <img slot="icon" src="@/assets/img/my.png" alt />
      <img slot="iconCurrent" src="@/assets/img/my_current.png" alt />
      <p slot="text">我的</p>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";
export default {
  components: {
    TabBarItem
  }
};
</script>

<style scope lang='scss'>
@import "../../../assets/css/global.scss";
.tabbar {
  width: 100%;
  padding: px2rem(10px);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background: rgb(243, 243, 243);
}
</style>