export let distance = (a, b) => {
  let x = Math.pow((b[0] - a[0]), 2);
  let y = Math.pow((b[1] - a[1]), 2);
  return Math.sqrt(x + y);
};
