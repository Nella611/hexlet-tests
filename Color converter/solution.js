import { chunk } from 'lodash';

// BEGIN (write your solution here)
const hexToRgb = (str) => {
  const rrggbb = str.replace(/^#/, '');
  const result = {};
  result['r'] = parseInt((rrggbb.substr(0, 2)), 16);
  result['g'] = parseInt((rrggbb.substr(2, 2)), 16);
  result['b'] = parseInt((rrggbb.substr(4, 2)), 16);
  return result;
};
const rgbToHex = (r, g, b) => {
  const toHex = (x) => x.toString(16).padStart(2, "0");
  const hex = '#' + toHex(r) + toHex(g) + toHex(b);
  return hex;
};
export { hexToRgb };
export { rgbToHex };
// END