// Only change code below this line
function urlSlug(title) {
return title.trim().split(/\s+/g).join('-').toLowerCase();
}
// Only change code above this line
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
