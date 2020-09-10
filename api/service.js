import {
  post,
  get
} from "./axios";
// 获取首页文章列表
export function getArtAll(params) {
  return post('/articles/allList', params).then(res => res.data)
}
// 获取文章详情
export function getArtDetail(params) {
  return post('/articles/detail', params).then(res => res.data);
}
//编辑文章
export function updateArt(params) {
    return post('/articles/update', params).then(res => res.data)
}
// 获取标签
export function getFontTagList(params) {
  return post('/tags/allList', params).then(res => res.data)
}
// 获取分类
export function getFontCategoryList(params) {
  return post('/categorys/allList', params).then(res => res.data)
}
// 按标签获取文章
export function getArticleListByTag(params) {
  return post('/tags/articles', params).then(res => res.data)
}
// 获取热门文章
export function getArticleHot(params) {
  return post('/articles/hostList', params).then(res => res.data)
}

// 获取导航列表
export function getNavAll(params) {
  return post('/navs/navlist', params).then(res => res.data)
}
// 获取导航详情
export function getNavDetail(params) {
  return post('/navs/details', params).then(res => res.data)
}
// 按搜索获取文章
export  function getArtByTitle(params) {
  return post('/articles/selectTitle',params).then( res => res.data)
}