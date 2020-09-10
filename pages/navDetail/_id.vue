<template>
  <div class="ncontent">
    <div class="title">
      <div class="post-title-wrap">
        <p>{{info.title}}</p>
      </div>
    </div>
    <div class="nbox">
      <div class="dimg">
        <img :src="info.img" alt="">
      </div>
      <div class="dcont">
        <div class="fli">
          <span class="name">网站地址:</span>
          <a :href="info.homeurl" target="_blank" class="homeurl">{{info.homeurl}}</a>
        </div>
        <div class="fli">
          <span class="name">github:</span>
          <a :href="info.githuburl" target="_blank" class="githuburl">{{info.githuburl}}</a>
        </div>
        <div class="fli">
          <span class="name">网站描述:</span>
          <span class="describe">{{info.describes}}</span>
        </div>
      </div>
    </div>
    <div class="markdown-body" v-html="info.detailhtml">
    </div>
  </div>
</template>
<script>
  import marked from "marked";
  export default {
    watchQuery: ['page'],
    data() {
      return {
        id: "",
      };
    },
    head() {
      return {
        title: this.info.title+'_'+this.info.describes,
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.info.describes
        }]
      }
    },
    async fetch({
      store,
      query,
      params
    }) {
      await store.dispatch('getNavDetails', {
        id: params.id
      });
    },
    computed: {
      info() {
        return this.$store.state.nav.detail
      }
    }
  };

</script>
<style lang="less" scoped>
  .ncontent {
    margin-top: 84px;
    margin-bottom: 20px;
    width: 850px;
    background-color: #ffffff;
    padding: 15px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    position: relative;
    overflow: hidden;
    border-top: 2px solid #2d8cf0;

    .title {
      font-weight: 500;
      font-size: 30px;
      border-bottom: 1px dashed #d3dae5;

      padding: 10px;
      position: relative;
      color: #ff8300;
      margin: 0;
    }

    .nbox {
      overflow: hidden;
      padding: 15px 10px;

      .dimg {
        float: left;
        margin-right: 10px;
      }

      .dcont {
        overflow: hidden;

        .fli {
          line-height: 25px;
          max-height: 50px;
          overflow: hidden;
          margin-bottom: 15px;
          font-size: 16px;
          font-weight: 700;

          .name {
            color: #333;
            display: inline-block;
            width: 80px;
          }

          .homeurl {
            color: #09f;
          }

          .githuburl {
            color: #00a06b;
          }

          .describe {
            color: #777;
            font-weight: 400;
          }
        }
      }
    }
  }

</style>
