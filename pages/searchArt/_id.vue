<template>
  <div>
    <div class="files-content">
      <h2 class="detail-content">与<span class="tips"># {{$route.query.val}}</span>相关的文章</h2>
      <p class="detail-desc">
        <span>共找到<span class="tips">{{articleList.total_items || 0}}</span>篇</span>
        <!-- <span>139次浏览</span> -->
      </p>

    </div>
    <list :articleList="articleList"></list>
  </div>

</template>
<script>
  import list from '../../components/articleList'
  // import sidebar from '@/components/slider'
  export default {
    watchQuery: true,
    name: 'id',
    data() {
      return {};
    },
    components: {
      list,
      // sidebar
    },
    head() {
      return {
        title: 'web前端教程-' + this.tagName + '相关'
      }
    },
    async fetch({
      store,
      query,
      params
    }) {
      await store.dispatch('getArtByKeyword', {
        // page: query.page,
        val: query.val
      });
    },
    computed: {
      articleList() {
        return this.$store.state.article.searchlist
      }
    },
  };

</script>
<style lang="less" scoped>
  // pc
  .files-content {
    margin-top: 84px;
    margin-bottom: -84px;
    width: 850px;
    background-color: #ffffff;
    padding: 15px;
    border-radius: 4px;
    border-bottom: 1px dashed #eeeeee;

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

    .files-type {
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

  .tips {
    color: orange;
  }

</style>
