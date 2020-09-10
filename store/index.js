import service from '../api';
const LIMIT = 9;
const CURRENT_PAGE = 1;
export const actions = {
  nuxtServerInit(store, {
    params,
    route,
    req
  }) {
    const initAppData = [
      store.dispatch('getArticleHot'),
      store.dispatch('getFontTagList'),
    ]

    return Promise.all(initAppData)
  },
  // 获取文章列表
  async getAllArtList({
    commit,
    state
  }, params) {
    let postParam = {
      page: params.page,
      limit: params.limit
    }
    const res = await service.getArtAll(postParam).catch(err => {
      console.log(err)
    })
    if (res && res.code == 0) {
      commit('article/GET_ART_SUCCESS', res.data)
    }
  },
  // 获取文章详情
  async getArtDetails({
    commit,
    state
  }, params) {
    const res = await service.getArtDetail(params).catch(err => {
      console.log(err)
    })
    if (res && res.code == 0) {
      commit('article/GET_ART_DETAIL_SUCCESS', res.data);

    }
  },
  // 获取标签
  async getFontTagList({
    commit,
    state
  }, params) {
    const res = await service.getFontTagList().catch(err => {
      console.log(err)
    })
    if (res && res.code === 0) {
      commit('tag/GET_TAG_SUCCESS', res.data)
    }
  },
  // 按标签获取文章列表
  async getArtListByTag({
    commit,
    state
  }, params) {
    let postParam = { 
      tag: params.tag,
      page: params.page,
      limit: params.limit
    }
    const res = await service.getArticleListByTag(postParam).catch(err => {
      console.log(err)
    })
    if (res && res.code === 0) {
      commit('tag/GET_ART_BY_TAG_SUCCESS', res.data)
    }
  },
  // // 根据分类获取文章
  // async getFontCategoryList({ commit, state }, params) {
  //     const res = await service.getFontCategoryList().catch(err => {
  //         console.log(err)
  //     })
  //     if (res && res.code === 0) {
  //         commit('category/GET_CATEGORY_SUCCESS', res.data)
  //     }
  // },
  //获取热门文章
  // 获取文章详情
  async getArticleHot({
    commit,
    state
  }, params) {
    const res = await service.getArticleHot(params).catch(err => {
      console.log(err)
    })
    if (res && res.code === 0) {
      commit('article/GET_ART_HOT_SUCCESS', res.data)
    }
  },
   // 按标搜索取文章列表
   async getArtByKeyword({commit, state}, params) {
    let postParam = {
      val: params.val,
      page: params.page,
      limit: params.limit
    }
    const res = await service.getArtByTitle(postParam).catch(err => {
      console.log(err)
    })
    if (res && res.code === 0) {
      commit('article/GET_SEARCH_SUCCESS', res.data)
    }
  },
  // 获取导航列表
  async getAllNavList({
    commit,
    state
  }, params) {
    let postParam = {
      page: params.page,
      limit: params.limit
    }
    const res = await service.getNavAll(postParam).catch(err => {
      console.log(err)
    })
    if (res && res.code == 0) {
      commit('nav/GET_NAV_SUCCESS', res.data)
    }
  },
  // 获取文章详情
  async getNavDetails({
    commit,
    state
  }, params) {
    const res = await service.getNavDetail(params).catch(err => {
      console.log(err)
    })
    if (res && res.code == 0) {
      commit('nav/GET_NAV_DETAIL_SUCCESS', res.data)
    }
  },
  
}
