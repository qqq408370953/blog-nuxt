//引入nprogress

import NProgress from "nprogress";

import "nprogress/nprogress.css"; //这个样式必须引入

//minimum 设置开始时最低百分比，默认是0.08
NProgress.configure({ minimum: 0.1 });
//template改变进度条的HTML结构。为了保证进度条正常工作，需要一个包含role='bar' 属性的元素
// NProgress.configure({
//   template: "<div class='....'>...</div>"
// });
//ease和speed ease可传递CSS3缓冲动画字符串（如ease、linear、ease-in、ease-out、ease-in-out、cubic-bezier）。speed为动画速度（默认200，单位ms）
NProgress.configure({ easing: 'ease', speed: 500 });
//trickle 是否显示进度条，默认：true
NProgress.configure({ trickle: true });
//trickleSpeed设置每次进度条步进速度(ms)
NProgress.configure({ trickleSpeed: 200 });
//showSpinner是否显示环形进度动画，默认true
NProgress.configure({ showSpinner: false});
//parent 指定改变的父容器，默认body
// NProgress.configure({ parent: '#__layout' });

export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    NProgress.start();

    next();
  });

  app.router.afterEach(() => {
    NProgress.done();
  });
};
