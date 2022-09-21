import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { AllPaintingsPageComponent } from './pages/all-paintings-page/all-paintings-page.component';

const routes: Routes = [
  {path:"", component:AllPaintingsPageComponent},
  {path:"add", component:AddPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
