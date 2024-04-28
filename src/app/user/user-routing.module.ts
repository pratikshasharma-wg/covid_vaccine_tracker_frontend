import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { profileResolver } from './user.service';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: "profile", resolve: {profileData: profileResolver}, component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
