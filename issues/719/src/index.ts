export type Stuff = { a: string; b: string };

export const handleArrayOfStuff = (a: [Stuff]) => {};
export const handleArrayOfOptionalStuff = (a: [Stuff?]) => {};
export const handleStuff = (a: Stuff) => {};
export const handleOptionalStuff = (a?: Stuff) => {};
