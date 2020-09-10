<template>
  <div class="article-content">
    <span class="categorys" :style="{backgroundColor:detailInfo.categorydesc}"
      v-if="detailInfo.categorydesc">{{detailInfo.categoryname}}</span>
    <h2 class="detail-content">{{detailInfo.arttitle}}</h2>
    <p class="detail-desc">
      <span>发布于：{{detailInfo.cdate}}</span>
      <span>{{detailInfo.pv}}次浏览</span>
    </p>
    <div class="markdown-body" v-html="detailInfo.html"></div>
    <div class="article-type">
      <p>
        发布时间：
        <a>{{detailInfo.cdate}}</a>
      </p>
      <p>
        文章标签：
        <a>#{{detailInfo.tagname}}</a>
      </p>
      <!-- <p>
        版权声明：
        <a>{{detailInfo.category}}</a>
      </p>-->
    </div>
  </div>
</template>
<script>
  import marked from "marked";
  import service from "../../api";
  export default {
    watchQuery: ["page"],
    data() {
      return {
        id: "",
        pv: "",
        prop: {
          subfield: false, // 单双栏模式
          defaultOpen: "preview", //edit： 默认展示编辑区域 ， preview： 默认展示预览区域
          editable: false,
          toolbarsFlag: false,
          scrollStyle: true,
          codeStyle: "tomorrow-night",
          ishljs: true
        }
      };
    },
    head() {
      return {
        title: this.detailInfo.arttitle,
        meta: [{
            hid: 'description',
            name: 'description',
            content: this.detailInfo.abstract
          }
        ]
      }
    },
    async fetch({
      store,
      params,
      query
    }) {
      await store.dispatch("getArtDetails", {
        id: params.id
      });
    },
    computed: {
      detailInfo() {
        return this.$store.state.article.detail;
      }
    },
  };

</script>
<style lang="less" scoped>
  .article-content {
    margin-top: 84px;
    margin-bottom: 20px;
    width: 850px;
    background-color: #ffffff;
    padding: 15px;
    border-radius: 4px;
    position: relative;
    overflow: hidden;

    .categorys {
      position: absolute;
      top: -8px;
      left: -28px;
      display: block;
      width: 80px;
      height: 42px;
      line-height: 58px;
      transform: rotate(-45deg);
      text-align: center;
      font-size: 12px;
    }

    .detail-content {
      text-align: center;
      font-size: 20px;
      color: #666;
      margin: 16px 0;
    }

    .detail-desc {
      text-align: center;
      font-size: 12px;
      color: #999;
      padding-bottom: 15px;

      span {
        padding: 0 6px;
      }
    }

    .mardown-body {
      font-size: 14px;
      line-height: 34px;
    }

    .article-type {
      border-left: 2px solid #ccc;
      background-color: #f6f8fa;
      margin-top: 30px;
      margin-bottom: 15px;
      padding: 15px 0 15px 15px;
      font-size: 14px;

      p {
        padding-bottom: 5px;

        a {
          color: #409eff;
          text-decoration: underline;
          font-weight: 700;
        }
      }
    }
  }

</style>
