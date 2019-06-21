import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { FormsModule } from '@angular/forms';
import { PokemonService } from './services/pokemon.service';
import { Routes ,RouterModule} from '@angular/router';
import { NewPokemonComponent } from './new-pokemon/new-pokemon.component';
import { OnePokemonComponent } from './one-pokemon/one-pokemon.component';

const appRoutes:Routes =[
 {path:'pokemonList', component: PokemonViewComponent},
 {path:'newPokemon', component: NewPokemonComponent},
 {path:'onePokemon/:id', component: OnePokemonComponent},
 {path:'', component: PokemonViewComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonViewComponent,
    NewPokemonComponent,
    OnePokemonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
