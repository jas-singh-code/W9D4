const FollowToggle = require("./follow_toggle.js")

$(() => {
    console.log("this works 3")

    $(".follow-toggle").each((index) => {
        console.log("thisworks2")
        new FollowToggle(this[index])
    })
})