use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct _WasmService {}

#[wasm_bindgen]
impl _WasmService {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self {}
    }

    pub fn greet(&self) -> String {
        String::from("Hello World")
    }
}
