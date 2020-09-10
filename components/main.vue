<template>
  <div class="main">
    <nuxt />
    <side-bar/>
  </div>
</template>

<script>
  import sideBar from "~/components/sideBar.vue";
  export default {
    components: {
      sideBar,
    },
  }

</script>

<style lang="less" scoped>
  .main {
    position: relative;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 1192px;
    min-height:900px;
    margin: auto;
    background-color: #f6f6f6;
  }

</style>
