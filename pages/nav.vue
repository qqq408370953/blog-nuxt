<template>
  <navlist :navList="navList" @getCurrentPage="getCurrentPage"></navlist>
  <!-- :articleList="articleList" @getCurrentPage="getCurrentPage" -->
</template>
<script>
  import navlist from '../components/navList'
  export default {
    watchQuery: true,
    name: 'index',
    components: {
      navlist
    },
    data() {
      return {

      };
    },
    head() {
      return {
        title: '前端资源网_web前端导航|前端网址大全',
         meta: [{
          hid: 'description',
          name: 'description',
          content: "web前端网址导航,整理收藏web前端网址资源,包括:框架/库、前端模块/管理、移动端UI框架、Web-UI框架、Js插件、前端博客/团队等"
        }]
      }
    },
    data() {
      return {}
    },
    async fetch({
      store,
      query
    }) {
      await store.dispatch('getAllNavList', {
        currentPage: query.page
      });
    },
    computed: {
      navList() {
        return this.$store.state.nav.list
      },
    },
    methods: {
      getCurrentPage(data) {
        this.$store.dispatch('getAllNavList', {
          currentPage: data.currentPage,
          limit: 1,
        })
      }
    },
  };

</script>
<style lang="less" scoped>

</style>
