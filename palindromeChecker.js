function palindrome(str) {
  const lowerCaseString = str.toLowerCase();
  const normalizeArr = lowerCaseString.match(/[a-z0-9]/g);
  const midpoint = normalizeArr.length / 2;

  for (let i = 0; i < midpoint; i++) {
    if (normalizeArr[i] !== normalizeArr[normalizeArr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

palindrome("eye");
