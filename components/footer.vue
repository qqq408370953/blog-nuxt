<template>
  <div class="footer">
    <div class="icp-baseline"></div>
    <div class="icp">
      <div>
        © 2018-2020 www.xxx.com 版权所有
        <a
          style="color: #9599a4;text-decoration: none;"
          href="http://www.beian.miit.gov.cn"
          target="_blank"
        >京ICP备18036030号-2</a> |
        <img
          src="../static/img/icplogo.png"
          style="width:16px; height:16px;display: inline-block; vertical-align: middle;"
          alt
        >
        <a
          style="color: #9599a4;text-decoration: none;"
          href="#"
          target="_blank"
        >京公网安备 18036030号</a>
      </div>
      <div>服务条款 政策 终端设备 Unite-All</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
// pc
.footer {
  // background-color: #303650;
  width: 100%;
  .icp-baseline {
    // margin-top:50px;
    width: 1100px;
    height: 60px;
    // border-bottom: 1px solid #9699a4;
    opacity: 0.5;
    margin: auto;
  }
  .icp {
    width: 1100px;
    height: 100px;
    margin: auto;
    margin-top: 20px;
    div {
      text-align: center;
      margin-bottom: 15px;
      color: #9599a4;
      font-size: 12px;
    }
  }
}
</style>

