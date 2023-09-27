# WasmNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2.

Here we demonstrate how WASM modules can be used in Angular services to improve performance.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

To build WASM, you must have [wasm-pack](https://rustwasm.github.io/wasm-pack/) installed.

```
cd src/app/wasm.service/wasm_service
wasm-pack build
```

