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
import { FourOhFourComponentComponent } from './four-oh-four-component/four-oh-four-component.component';
import { UpdatePokemonComponent } from './update-pokemon/update-pokemon.component';

const appRoutes:Routes =[
 { path:'pokemonList', component: PokemonViewComponent},
 { path:'newPokemon', component: NewPokemonComponent},
 { path:'pokemonList/:id', component: OnePokemonComponent},
 { path:'pokemonList/update/:id', component: UpdatePokemonComponent},
 { path:'', component: PokemonViewComponent},
 { path: 'not-found', component: FourOhFourComponentComponent},
 { path: '**', redirectTo: 'not-found' }
]

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonViewComponent,
    NewPokemonComponent,
    OnePokemonComponent,
    FourOhFourComponentComponent,
    UpdatePokemonComponent
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
