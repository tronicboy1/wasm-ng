import { Injectable } from '@angular/core';
import { _WasmService } from './wasm_service/pkg/wasm_service';

@Injectable({
  providedIn: 'root',
})
export class WasmService extends _WasmService {
}
