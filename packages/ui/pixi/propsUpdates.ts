// https://codesandbox.io/s/6x5pr?file=/src/util.js:216-229
export function propUpdated(
  props: { [x: string]: any },
  oldProps: { [x: string]: any },
  keys: any[]
) {
  return keys.reduce((a, b) => {
    if (a) {
      return a;
    } else if (props[b] !== oldProps[b]) {
      return true;
    } else {
      return false;
    }
  }, false);
}
