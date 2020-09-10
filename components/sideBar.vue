<template>
  <div class="slider-wrap">
    <!-- floor1 -->
    <div class="list">
      <div class="title">
        <Icon type="md-calendar" class="icon-style" />博客简介
      </div>
      <div class="content">
        本站采用nuxt+node+express+mysql搭建。
        <br />目前尚在修改测试中，喜欢这款主题的朋友可以先收藏本站。
        后续源码会更新到github上。
      </div>
      <div>
        <!-- <Icon type="ios-thumbs-up" class="icon-star"/> -->
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
    }
  },
  methods: {
    gotag(id) {
      this.$router.push({
        path: "/tag/" + id
      });
    },
    godetail(id) {
      this.$router.push({
        path: "/article/" + id
      });
    }
  }
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
      font-size: 14px;

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
          font-size:12px;
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
</style>
