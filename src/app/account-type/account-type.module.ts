import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { SpecialistComponent } from './specialist/specialist.component';
import { AccountTypeComponent } from './accountType/accountType.component';



@NgModule({
  declarations: [AccountTypeComponent,ClientComponent,SpecialistComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [AccountTypeComponent,ClientComponent,SpecialistComponent]
})
export class AccountTypeModule { }
