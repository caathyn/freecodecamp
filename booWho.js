//solution 1
function booWho(bool) {
  return typeof bool === 'boolean';
}

booWho(null);

//solution 2
function booWho(bool) {
  return bool === true || bool === false;
}

booWho(42);