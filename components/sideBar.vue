<template>
  <div class="slider-wrap">
    <!-- floor1 -->
    <div class="list">
      <div class="title">
        <Icon type="md-calendar" class="icon-style" />博客简介
      </div>
      <div class="content blog-star">
        本站完整前后台采用vue+nuxt+iview+vue-particles+node+express+mysql+mavon-editor+element-ui等技术栈搭建,
        完整源码存放在Github,如果对你有帮助,望请star,谢谢~
      </div>
      <div>
        <Icon type="logo-github" class="icon-star" />
        <a
          href="https://github.com/qqq408370953/blog-nuxt"
          style="width:100px; font-size:16px;"
          target="__blank"
        >github地址</a>
      </div>
    </div>
    <!-- floor2 -->
    <div class="list">
      <div class="title">
        <Icon type="ios-flame" class="icon-style" />热门文章
      </div>
      <div class="content">
        <div
          class="list"
          v-for="(item,index) in hotArticleList"
          :key="index"
          @click="godetail(item.id)"
        >
          <div class="title-index">{{index+1}}</div>
          <div class="title-content">{{item.arttitle}}</div>
        </div>
      </div>
    </div>
    <!-- floor3 -->
    <!-- floor4 -->
    <div class="list">
      <div class="title">
        <Icon type="md-bookmark" class="icon-style" />标签
      </div>
      <div class="content-tag">
        <Tag
          v-for="(item,index) in taglist"
          :key="index"
          size="small"
          :color="item.color"
          @click.native="gotag(item.id)"
        >{{item.tagname}}[{{item.artNum}}]</Tag>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    hotArticleList() {
      return this.$store.state.article.hot;
    },
    taglist() {
      return this.$store.state.tag.list;
    },
    categorylist() {
      return this.$store.state.category.list;
    },
  },
  methods: {
    gotag(id) {
      this.$router.push({
        path: "/tag/" + id,
      });
    },
    godetail(id) {
      this.$router.push({
        path: "/article/" + id,
      });
    },
  },
};
</script>
<style lang="less" scoped>
// pc
.slider-wrap {
  width: 320px;
  margin-top: 84px;

  .list {
    padding: 15px;
    border-radius: 4px;
    background-color: #ffffff;
    margin-bottom: 15px;

    .title {
      height: 30px;
      line-height: 30px;
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 5px;
      border-bottom: 1px dashed #eeeeee;

      .icon-style {
        color: #1890ff;
        font-size: 25px;
        margin-right: 5px;
      }
    }

    .content {
      .list {
        padding: 5px;
        position: relative;
        height: 30px;
        border-bottom: 1px dashed #eeeeee;
        cursor: pointer;

        .title-index {
          position: absolute;
          width: 22px;
          height: 22px;
          background-color: #e6e6e6;
          // color: #fff;
          line-height: 22px;
          text-align: center;
          border-radius: 5px;
          font-size: 12px;
        }

        .title-content {
          width: 260px;
          position: absolute;
          left: 35px;
          font-size: 14px;
          font-weight: 400;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          transition: all 0.3s ease;
        }

        .title-content:hover {
          color: #2d8cf0 !important;
          transform: translateX(5px);
        }
      }
    }

    .content-classfy {
      font-size: 14px;

      .classfy-list {
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        height: 35px;
        line-height: 35px;

        .name {
          width: 90px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .container {
          width: 90px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: right;
        }
      }
    }

    .content-tag {
      font-size: 14px;

      button {
        margin-right: 10px;
        margin-bottom: 10px;
      }
    }

    .icon-star {
      // color:#1890ff;
      font-size: 25px;
      margin-right: 5px;
    }
  }
}
.blog-star {
  text-align: left;
  margin: 8px 0 0;
  line-height: 22px;
  font-size: 14px;
  text-align: justify;
  text-align-last: left;
}
</style>
