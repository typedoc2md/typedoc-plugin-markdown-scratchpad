export const foo = { a: "", b: "" };
export type Foo = typeof foo;
export type FooExplicit = { a: string; b: string };
export type Foo2 = Foo | null;

export const handleFoo = (a: Foo | null) => {};
export const handleFooOnly = (a: Foo) => {};
export const handleFooExplicit = (a: FooExplicit | null) => {};
export const handleFoo2 = (a: Foo2) => {};
