import {draw} from './canvas.js';
// write a handler for the keys
export function handleKey(e) {
    if (e.key.includes('Arrow')) {
      e.preventDefault();
      draw({ key: e.key });
    }
  }