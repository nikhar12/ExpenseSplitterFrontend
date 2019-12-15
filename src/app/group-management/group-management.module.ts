import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewComponent } from './create-new/create-new.component';
import {FormsModule} from '@angular/forms';
import {RouterModule } from '@angular/router';


@NgModule({
  declarations: [CreateNewComponent, CreateNewComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([

      {path: './group/creategroup', component: CreateNewComponent}


    ])
  ]
})
export class GroupManagementModule { }
