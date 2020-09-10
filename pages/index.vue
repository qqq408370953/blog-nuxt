<template>
  <list :articleList="articleList"></list>
</template>
<script>
  import list from '../components/articleList'
  export default {
    watchQuery: true,
    name: 'index',
    components: {
      list
    },
    data() {
      return {

      };
    },
    head() {
      return {
        title: '首页itemsblog.com,专注于前端开发，分享前端技术',
      }
    },
    data() {
      return {}
    },
    async fetch({
      store,
      query
    }) {
      await store.dispatch('getAllArtList', {
        page:1,
        limit:10
      });
    },
    computed: {
      articleList() {
        return this.$store.state.article.list
      },
    },
    methods: {
    },
  };

</script>
<style lang="less" scoped>

</style>
