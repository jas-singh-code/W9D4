/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/apiUtil.js":
/*!*****************************!*\
  !*** ./frontend/apiUtil.js ***!
  \*****************************/
/***/ ((module) => {

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


/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ApiUtil = __webpack_require__(/*! ./apiUtil */ "./frontend/apiUtil.js");

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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");

$(() => {
  $(".follow-toggle").each((index, button) => {
    new FollowToggle(button);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map