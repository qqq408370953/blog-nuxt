<template>
  <div class="header">
    <div class="container">
      <Row type="flex" justify="start" class="code-row-bg">
        <Col span="4" class="height-64">
          <nuxt-link to="/" class="header-title link-active">
            <img src="../static/img/headerlogo.png" alt />
          </nuxt-link>
        </Col>
        <Col span="2" class="height-64" v-for="(item,index) in list" :key="index">
          <nuxt-link :to="item.path" class="header-title">{{item.name}}</nuxt-link>
        </Col>
        <Col span="8" class="search height-64">
          <Input v-model="searchVal">
            <Button slot="append" icon="ios-search" @click="searchValue"></Button>
          </Input>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headerTitle: [],
      list: [
        {
          name: "首页",
          path: "/",
          index: 0,
        },
        {
          name: "前端导航",
          path: "/nav",
          index: 1,
        },
        {
          name: "关于",
          path: "/abouts",
          index: 3,
        },
      ],
      colorindex: 0,
      searchVal: "",
    };
  },
  methods: {
    changeColor(index) {
      this.colorindex = index;
    },
    searchValue() {
      this.$router.push({
        name: "searchArt-id",
        query: {
          val: this.searchVal,
        },
      });
      this.searchVal = "";
      // return false;
    },
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
// pc
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #fcfcfc;
  background-color: #ffffff;
  z-index: 99;

  .container {
    width: 1192px;
    height: 64px;
    margin: auto;

    .code-row-bg {
      height: 64px;
      line-height: 64px;
      text-align: center;
      font-size: 14px;
      color: #666666;

      .search {
        width: 260px;
        // height:50px;
        margin-top: 14px;
      }

      .height-64 {
        height: 64px;

        // cursor: pointer;
        .header-title {
          color: #666666;
        }

        .header-title:hover {
          color: #2d8cf0 !important;
        }
      }
    }
  }
}

.nuxt-link-exact-active {
  font-weight: bold !important;
}
</style>
