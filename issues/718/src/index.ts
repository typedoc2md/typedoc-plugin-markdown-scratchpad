export interface GlobalEventEmitter {}

export interface Foo {
  getJSModule<Module = unknown>(name: string): Module;
  getJSModule(name: "GlobalEventEmitter"): GlobalEventEmitter;
}
