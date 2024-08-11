/**
 * Sorts an array using the specified compare function, preserving the order
 * of elements that compare equally.
 */
declare const stableSort: <T>(arr: T[], compare: (a: T, b: T) => number) => T[];

export { stableSort };
