<template>
  <div class="content">
    <div
      class="content-list"
      v-for="(item,index) in articlelist.data"
      :key="index"
      @click="goDetail(item)"
    >
      <div class="title">{{item.arttitle}}</div>
      <div class="container">
        <img :src="item.thumbnail" class="img-desc" alt />
        <div class="content-right">
          <div class="content-title">{{item.abstract}}</div>
          <div class="desc">
            <span class="time">{{item.cdate}}</span>
            <span class="views">
              <Icon type="ios-eye-outline" class="icon-style" />
              {{item.pv}}
            </span>
            <span class="classfy">
              <Icon type="ios-list" class="icon-style" />
              {{item.tagname}}
            </span>
            <span class="category">
              <Tag :color="item.categorydesc">{{item.categoryname}}</Tag>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="page">
      <Page
        :total="articlelist.total_items"
        :page-size="10"
        size="small"
        next-text="下一页"
        @on-change="getMoreArt"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: ["articlelist","tag"],
  data() {
    return {};
  },
  methods: {
    goDetail(row) {
      this.$router.push({
        path: "/article/" + row.id
      });
    },
    getMoreArt(val) {
      this.$store.dispatch("getArtListByTag", {
        page: val,
        tag:this.tag,
        limit: 10
      });
    }
  }
};
</script>
<style lang="less" scoped>
// pc
.content {
  margin-top: 84px;
  margin-bottom: 20px;
  width: 850px;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 4px;

  // .gopath {
  //   color: #515a6e;

  .content-list {
    width: 100%;
    padding: 10px 0px;
    border-bottom: 1px dashed #eeeeee;
    cursor: pointer;

    .title {
      font-size: 20px;
      font-weight: bold;
    }

    .title:hover {
      color: #2d8cf0 !important;
    }

    .container {
      margin-top: 10px;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;

      .img-desc {
        width: 200px;
        height: 100px;
        display: block;
      }

      .content-right {
        width: 600px;
        height: 100px;
        position: relative;

        .content-title {
          // width: 100%;
          // height: 60px;
          position: absolute;
          top: 0px;
          left: 0px;
        }

        .desc {
          width: 100%;
          // height: 40px;
          position: absolute;
          bottom: 0px;
          left: 0px;
          font-size: 12px;
          color: #666695;

          .views，.classfy {
            margin-right: 10px;
          }

          .icon-style {
            font-size: 20px;
            font-weight: bold;
            margin-top: -5px;
          }

          .category {
            position: absolute;
            top: 0px;
            right: 0px;
          }
        }
      }
    }
  }

  // }

  .page {
    width: 380px;
    text-align: center;
    margin: 20px auto;
  }
}
</style>
