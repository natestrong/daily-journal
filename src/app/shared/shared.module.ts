import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {MaterialModule} from '../material.module'
import {FlexLayoutModule} from '@angular/flex-layout'

@NgModule({
  imports: [
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ]
})
export class SharedModule {
}
