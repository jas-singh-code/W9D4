const ApiUtil = require("./apiUtil");

function FollowToggle(el) {
  this.$el = $(el);
  this.userId = this.$el.data("user-id");
  this.followState = this.$el.data("initial-follow-state");
  this.render();
  this.$el.on("click", this.handleClick.bind(this));
}

FollowToggle.prototype.render = function () {
  if (this.followState === "unfollowed") this.$el.html("Follow!");
  if (this.followState === "followed") this.$el.html("Unfollow!");
};

FollowToggle.prototype.handleClick = function (e) {
  let followToggle = this;
  e.preventDefault();
  console.log(this.userId);
  if (this.followState === "unfollowed") {
    this.render();
    ApiUtil.followUser(this.userId).then(function () {
      followToggle.followState = "followed";
      followToggle.render();
    });
  } else {
    this.render();
    ApiUtil.unfollowUser(this.userId).then(function () {
      followToggle.followState = "unfollowed";
      followToggle.render();
    });
  }
  //   this.render();
};
module.exports = FollowToggle;
