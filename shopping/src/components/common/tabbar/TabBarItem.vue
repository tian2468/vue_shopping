<template>
  <div class="tabbar_item" @click="itemClick">
    <slot name="icon" v-if="!isCurrent"></slot>
    <slot name="iconCurrent" v-else></slot>
    <div :class="isCurrent?'avtive':''">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      //   isCurrent: true
    };
  },
  computed: {
    
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scope lang='scss'>
@import "../../../assets/css/global.scss";
.tabbar_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: px2rem(25px);
  }
  p {
    font-size: px2rem(13px);
    margin-top: px2rem(5px);
  }
}
.avtive {
  color: rgb(129, 82, 155);
}
</style>