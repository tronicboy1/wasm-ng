import { Component, inject } from '@angular/core';
import { WasmService } from './wasm.service/wasm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wasmService = inject(WasmService);

  title = this.wasmService.greet();
}
