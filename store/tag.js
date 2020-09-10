export const state = () => ({
  // 标签列表
  list: {},
  artByTag: {}
});

export const mutations = {
  // 获取标签列表
  GET_TAG_SUCCESS(state, data) {
    let arry = data;
    arry.map((item, index) => {
      var color = "rgba(";
      for (var i = 0; i < 3; i++) {
        color += parseInt(Math.random() * 256) + ",";
      }
      color += 0.6+ ")";
      return (item.color = color);
    });
    state.list = arry;
  },
  // 根据标签获取文章
  GET_ART_BY_TAG_SUCCESS(state, data) {
    state.artByTag = data;
  }
};
