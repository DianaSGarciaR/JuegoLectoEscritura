import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { IdentifyGameComponent } from './components/identify-game/identify-game.component';
import { LoginComponent } from './components/login/login.component';
import { MemoramaGameComponent } from './components/memorama-game/memorama-game.component';
import { SelecGameComponent } from './components/selec-game/selec-game.component';
import { WritingGameComponent } from './components/writing-game/writing-game.component';
import { GraficaComponent } from './components/grafica/grafica.component';



const APP_ROUTES: Routes = [

  { path:'login', component: LoginComponent },
  { path:'memorama-game', component: MemoramaGameComponent },
  { path:'selec-game', component: SelecGameComponent },
  { path:'writing-game', component: WritingGameComponent },
  { path:'identify-game', component: IdentifyGameComponent },
  { path:'grafica', component: GraficaComponent },
  { path: '**' , pathMatch: 'full', redirectTo:'selec-game'}

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});