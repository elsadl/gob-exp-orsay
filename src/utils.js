export let distance = (a, b) => {
  let distX = b[0] - a[0];
  let distY = b[1] - a[1];
  return distX + distY;
};
