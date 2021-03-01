/**
 * There are two type of constants exported here:
 * - simple media query strings (to use, for example, with window.matchMedia())
 * - media query strings prefixed with @media
 *  (for easier use on template literals)
 */

/* Simple */

// <= 767px
export const extraSmall = '(max-width: 47.94em)';
// >= 768px && <= 1023
export const small = '(min-width: 48em) and (max-width: 63.94em)';
// >= 1024
export const medium = '(min-width: 64em)';

export const gteSmall = '(min-width: 48em)'; // >= 768px
export const lteSmall = '(max-width: 63.94em)'; // <= 1023px

/* Prefixed with @media */
export const extraSmallMedia = `@media ${extraSmall}`; // <= 767px
export const smallMedia = `@media ${small}`; // >= 768px && <= 1023
export const mediumMedia = `@media ${medium}`; // >= 1024

export const gteSmallMedia = `@media ${gteSmall}`; // >= 768px
export const lteSmallMedia = `@media ${lteSmall}`; // <= 1023px
