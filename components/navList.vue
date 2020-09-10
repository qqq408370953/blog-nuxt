<template>
  <div class="files-content">
    <div class="floorli" v-for="(item,index) in navList" :key="index">
      <div class="title" :id="'anchor_'+index">
        <span>{{item.typename}}</span>
      </div>
      <div class="box" v-for="(k,v) in item.list" :key="v">
        <a :href="k.homeurl" target="_blank" class="childtitle">{{k.title}}</a>
        <nuxt-link class :to="'/navDetail/'+k.id">
          <div class="ms">{{k.describes}}</div>
        </nuxt-link>
      </div>
    </div>
    <div class="anchor-container">
      <Anchor show-ink :affix="false">
        <AnchorLink
          :href="'#anchor_'+index"
          :title="item.typename"
          v-for="(item,index) in navList"
          :key="index"
        />
      </Anchor>
    </div>
  </div>
</template>
<script>
export default {
  props: ["navList"],
  data() {
    return {};
  }
};
</script>
<style lang="less">
// pc
.files-content {
  margin-top: 84px;
  margin-bottom: 20px;
  width: 850px;
  padding: 15px;
  border-radius: 4px;
  position: relative;
  // overflow-y: scroll;
  .anchor-container {
    width: 100px;
    position: fixed;
    top: 70px;
    left: 50px;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    z-index: 999999;
  }

  .floorli {
    margin-bottom: 20px;
    overflow: hidden;
    clear: both;

    .title {
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      margin: 10px 0;
      margin-bottom: 15px;

      span {
        display: inline-block;
        background: #2d8cf0;
        color: #fff;
        width: 150px;
        text-align: center;
      }
    }

    .box {
      width: 23.5%;
      padding: 1.5%;
      margin-right: 1.5%;
      float: left;
      background: #fff;
      margin-bottom: 15px;
      -webkit-transition: all 0.1s ease;
      transition: all 0.1s ease;

      .childtitle {
        color: #2d8cf0;
        font-size: 16px;
        font-weight: 700;
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        display: block;
        word-break: break-all;
      }

      .ms {
        color: #888;
        font-size: 12px;
        height: 40px;
        line-height: 20px;
        overflow: hidden;
        margin-top: 5px;
        word-break: break-all;
      }
    }
  }
}
</style>
