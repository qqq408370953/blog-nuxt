export const state = () => ({

  // 文章列表
  list: {},
  hot: [],
  detail: {
    artTitle: ""
  },
  searchlist:[]
})

export const mutations = {
  // 获取文章列表
  GET_ART_SUCCESS(state, data) {
    state.list = data
  },
  // 获取文章详情
  GET_ART_DETAIL_SUCCESS(state, data) {
    state.detail = data
  },
  // 获取热门文章详情
  GET_ART_HOT_SUCCESS(state, data) {
    state.hot = data
  },
  //获取搜索文章列表
  GET_SEARCH_SUCCESS(state, data) {
    state.searchlist = data
  },
}