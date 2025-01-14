import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Servicio

 import { LoadGraphService } from './load-graph.service'


//import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SelecGameComponent } from './components/selec-game/selec-game.component';
import { WritingGameComponent } from './components/writing-game/writing-game.component';
import { IdentifyGameComponent } from './components/identify-game/identify-game.component';
import { MemoramaGameComponent } from './components/memorama-game/memorama-game.component';
import { LoginComponent } from './components/login/login.component';
import { GraficaComponent } from './components/grafica/grafica.component';
import { APP_ROUTING } from './app-routing.module';
import { SumaComponent } from './components/suma/suma.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SelecGameComponent,
    WritingGameComponent,
    IdentifyGameComponent,
    MemoramaGameComponent,
    LoginComponent,
    GraficaComponent,
    SumaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    //NgxChartsModule
  ],
  providers: [
    LoadGraphService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
