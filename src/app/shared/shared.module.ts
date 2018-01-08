import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusService } from './status.service';
import { TextService } from './text.service';
import { ApiModule } from '../api/api.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { NgxLocalizedNumbers } from 'ngx-localized-numbers';
import { NgxLocalizedNumbersService } from 'ngx-localized-numbers';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LaddaModule } from 'angular2-ladda';
import { AppSpinnerComponent } from '../components';


@NgModule({
  imports: [
    CommonModule,
    LaddaModule.forRoot({
      style: 'slide-left',
    }),
    ApiModule,
    AuthenticationModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLocalizedNumbers.forRoot()
  ],
  declarations: [AppSpinnerComponent],
  providers: [
    StatusService,
    TextService,
    NgxLocalizedNumbersService,
    FormBuilder
  ],
  exports: [
    CommonModule,
    ApiModule,
    AuthenticationModule,
    NgxLocalizedNumbers,
    ReactiveFormsModule,
    FormsModule,
    LaddaModule,
    AppSpinnerComponent
  ]
})
export class SharedModule { }
