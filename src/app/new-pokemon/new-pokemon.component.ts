import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-pokemon',
  templateUrl: './new-pokemon.component.html',
  styleUrls: ['./new-pokemon.component.scss']
})
export class NewPokemonComponent implements OnInit {

  constructor(private pokemonService: PokemonService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name = form.value.name;
    const status = form.value.status;
    const type = form.value.type;
    const taille = form.value.taille;
    const commentaire = form.value.commentaire;
    this.pokemonService.addPokemon(name, type, commentaire, status, taille);
    this.router.navigate(['/pokemonList']);
  }
}
