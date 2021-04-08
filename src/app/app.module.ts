import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { Routes, RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule } from '@angular/material/dialog';
import { ToastrModule,ToastContainerModule } from 'ngx-toastr';
import { NgxDocViewerModule, } from 'ngx-doc-viewer';
import { UplaodComponent } from './uplaod/uplaod.component';
import { JobsComponent } from './jobs/jobs.component';
import { AgentComponent } from './agent/agent.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
// import {AfterViewInit, ElementRef, ViewChild,} from '@angular/core';
const routes: Routes = [

  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {path:"home",component:HomeComponent},
  {path:"About",component:AboutComponent},
  {path:"services",component:ServicesComponent},
  {path:"Login",component:LoginComponent},
  {path:"Contact",component:ContactComponent},
  {path:"upload",component:UplaodComponent},
  {path:"jobs",component:JobsComponent},
  { path : 'upload-document', component : UploadDocumentComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    LoginComponent,
    ContactComponent,
    UplaodComponent,
    JobsComponent,
    AgentComponent,
    UploadDocumentComponent ,
    
    
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,MatFormFieldModule,
    MatCardModule,FormsModule,
    MatToolbarModule,
    MatIconModule,MatInputModule,
     MatListModule,MatMenuModule,MatGridListModule,
     HttpClientModule,MatDialogModule, 
     ReactiveFormsModule,ToastContainerModule,
     ToastrModule.forRoot({
      timeOut: 10000,
     positionClass: 'toast-buttom-right',
     preventDuplicates: true,
     }),
     NgxDocViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
