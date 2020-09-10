export const state = () => ({

  // 文章列表
  list: {},
  hot: [],
  detail: {
    title: "",
    homeurl:"",
    img:"",
    githuburl:"",
    describes:"",
    details:"",
    detailhtml:"",
  },

})

export const mutations = {
  // 获取导航列表
  GET_NAV_SUCCESS(state, data) {
    state.list = data;
  },
  // 获取导航详情
  GET_NAV_DETAIL_SUCCESS(state, data) {
    state.detail = data
  },
}