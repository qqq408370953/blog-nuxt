<template>
  <div class="homepage">
    <no-ssr>
      <vue-particles
        color="#dedede"
        :particleOpacity="0.6"
        :particlesNumber="32"
        shapeType="circle"
        :particleSize="16"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.5"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles>
    </no-ssr>
    <head-blog />
    <transition>
      <main-blog></main-blog>
    </transition>
    <foot-blog />
    <BackTop :height="100" :bottom="200" class="z-index"></BackTop>
  </div>
</template>

<script>
import headBlog from "~/components/header.vue";
import mainBlog from "~/components/main.vue";
import footBlog from "~/components/footer.vue";
export default {
  components: {
    headBlog,
    mainBlog,
    footBlog
  }
};
</script>

<style lang="less" scoped>
.homepage {
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
  position: relative;
  overflow-x: hidden;
}
#particles-js {
  display: block;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
}
.ivu-back-top-inner {
  background-color: #2d8cf0 !important;
}
.z-index {
  z-index: 9999999999999;
}
</style>
