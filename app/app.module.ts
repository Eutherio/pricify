import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { FillPipe } from './product/fill.pipe';

import { AppComponent }  from './app.component';
import { ProductComponent }  from './product/product.component';
import { FormComponent }  from './product/form/form.component';
import { FieldComponent }  from './product/form/field/field.component';
import { OptionComponent }  from './product/form/field/option/option.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ProductComponent,
    FormComponent,
    FieldComponent,
    OptionComponent,
    FillPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
