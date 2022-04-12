const js = import("./node_modules/@yuyagishita/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});
