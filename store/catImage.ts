import { atom } from 'recoil';

/**
 * Atom for managing the state of the cat image.
 *
 * This atom holds the state of a cat image, which can be used throughout
 * the application wherever the cat image's state is needed. Recoil atoms
 * can be thought of as units of state. This atom has a default state of
 * null, indicating that there's no cat image by default.
 */
export const catImageState = atom({
  key: 'catImageState', // Unique ID for this atom, used as a reference in the Recoil ecosystem.
  default: null, // Default value (or initial value) for the cat image state.
});
