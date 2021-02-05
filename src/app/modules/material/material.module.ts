import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatIconModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatProgressBarModule,
  MatTableModule,
  MatCardModule,
  MatPaginatorModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES

})
export class MaterialModule { }
