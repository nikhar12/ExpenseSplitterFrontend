import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import {RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ViewGroupComponent } from './view-group/view-group.component'
import { CreateNewComponent } from './create-new/create-new.component';

@NgModule({
  declarations: [CreateNewComponent, ViewGroupComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule,
  ]
})
export class GroupManagementModule { }
