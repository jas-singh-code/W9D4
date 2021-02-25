const ApiUtil = {
  followUser: function (id) {
    return ApiUtil.changeFollowStatus(id, "POST");
  },

  unfollowUser: function (id) {
    return ApiUtil.changeFollowStatus(id, "DELETE");
  },

  changeFollowStatus: function (id, method) {
    return $.ajax({
      url: `/users/${id}/follow`,
      dataType: "json",
      method,
    });
  },
};

module.exports = ApiUtil;
