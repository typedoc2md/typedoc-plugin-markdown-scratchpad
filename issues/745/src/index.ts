/* 
  NOTE - If using a typeof, `object` is emitted for the type
*/
export const foo = {
  a: "",
  b: "",
};

export type Options = typeof foo;

export const works1 = (opts: Options) => {};
export const works2 = (opts?: Options) => {};
export const doesNotWork1 = (opts: [Options]) => {};
export const doesNotWork2 = (opts: [(Options | null | undefined)?]) => {};

const doesNotWorkDefault = (opts: [(Options | null | undefined)?]) => {};
export default doesNotWorkDefault;
