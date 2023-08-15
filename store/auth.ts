import { atom } from 'recoil';

/**
 * Atom for managing the state of user authentication.
 *
 * This atom holds the state indicating whether a user is logged in or not.
 * It can be used throughout the application to make decisions based on the
 * user's authentication status. Recoil atoms are units of state. This atom
 * has a default state of false, indicating that the user is not logged in by default.
 */
export const loggedInState = atom({
  key: 'loggedInState', // Unique ID for this atom, used as a reference in the Recoil ecosystem.
  default: false, // Default value (or initial value) indicating the user's authentication status.
});
