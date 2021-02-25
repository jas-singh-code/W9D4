function FollowToggle (el) {
    this.$el = $(`${el}`);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
}

FollowToggle.prototype.render = function() {
    if (this.followState === "unfollowed") this.$el.text("Follow!");
    if (this.followState === "followed") this.$el.text("Unfollow!");
}

FollowToggle.prototype.handleClick = () => {
    this.$el.on("click", e => {
        e.preventDefault();
        $.ajax({
            method: "POST",
            url: "/users/:user_id/follow",
        })
    })
}
module.exports = FollowToggle;