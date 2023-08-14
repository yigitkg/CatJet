import { atom } from 'recoil';

export const catImageState = atom({
  key: 'catImageState', // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});
