
#![allow(unused_variables)]

use crate::data::{get_base_data, get_base_data_dict};

mod types;
mod data;

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn get_game_data() -> JsValue {
    let data = get_base_data();
    JsValue::from_serde(&data).unwrap()
}

#[wasm_bindgen]
pub fn get_game_data_dictionary() -> JsValue {
    let data = get_base_data_dict();
    JsValue::from_serde(&data).unwrap()
}


