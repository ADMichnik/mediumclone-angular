import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RegisterComponent} from './components/register/register.component'
import {RouterModule} from '@angular/router'

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]

// we create routes array here in auth.module so if we eventually need to delete it it would be easier to remove

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [RegisterComponent],
})
export class AuthModule {}
