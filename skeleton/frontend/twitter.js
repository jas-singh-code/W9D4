const FollowToggle = require("./follow_toggle.js");

$(() => {
  $(".follow-toggle").each((index, button) => {
    new FollowToggle(button);
  });
});
