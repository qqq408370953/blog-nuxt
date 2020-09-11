<template>
  <div class="abouts-content">
    <div class="detail-content">关于ITemsblog.com</div>
    <div class="detail-desc">
      <p>ITemsblog.com是一个集 ‘前端开发’ 和 ‘程序员-技术、职场、生活’
        为一体的blog类网站。内容以分享知识，交流经验,探讨技巧为主，希望能解决您程序开发和平常生活中的实际问题。其中有部分资源来自第三方博客，如果侵犯您版权请尽快联系我们，我们会尽快改正</p>

      <p>技术支持：vue+nuxt+node+express+mysql+less+mavon-editor+element-ui+iview+vue-particles等</p>

      <p>联系方式：<span style="color:#2d8cf0">sxgxiaoge123@163.com</span></p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    head() {
      return {
        title: "关于我——专注web前端技术，关注互联网程序员开发",
        meta: [{
          hid: 'description',
          name: 'description',
          content: "关于ITemsblog.com，是一个以分享知识，交流经验,探讨技巧为主的专业web前端博客网站"
        }]
      }
    },
  };

</script>
<style lang="less" scoped>
  // pc
  .abouts-content {
    margin-top: 84px;
    margin-bottom: 20px;
    width: 850px;
    background-color: #ffffff;
    padding: 15px;
    border-radius: 4px;

    .detail-content {
      text-align: center;
      font-size: 28px;
      height: 40px;
      line-height: 40px;
      color: #666;
      margin: 16px 0;
      border-bottom: 1px solid #ddd;
    }

    .detail-desc {
      text-align: left;
      font-size: 15px;
      line-height: 25px;
      color: #555;
      padding: 20px;

      p {
        margin-bottom: 30px;
      }
    }


  }

</style>
