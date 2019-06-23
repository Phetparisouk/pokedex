import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Routes, Router ,RouterModule} from '@angular/router';

import {ActivatedRoute} from "@angular/router";

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-pokemon',
  templateUrl: './update-pokemon.component.html',
  styleUrls: ['./update-pokemon.component.scss']
})
export class UpdatePokemonComponent implements OnInit {
  id:number=this.route.params['id'];
  name: String='Pokemon';
  status: String='Status';
  commentaire:String='Commentaire';
  type:String='Type';
  taille:String='Taille';

  constructor(private pokemonService: PokemonService,
  	private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
  	const id = this.route.snapshot.params['id'];
  	this.id=id;
  	this.name=this.pokemonService.getPokemonById(+id).name;
  	this.type=this.pokemonService.getPokemonById(+id).type;
  	this.status=this.pokemonService.getPokemonById(+id).status;
  	this.commentaire=this.pokemonService.getPokemonById(+id).commentaire;
  	this.taille=this.pokemonService.getPokemonById(+id).taille;
  }
  onSubmit(form: NgForm) {

    const name = form.value['name'];
    const status = form.value['status'];
    const type = form.value['type'];
    const taille = form.value['taille'];
    const commentaire = form.value['commentaire'];
    this.pokemonService.updatePokemon(this.id,name,type,commentaire,status,taille);
    this.router.navigate(['/pokemonList']);

    //console.log(form.value);
}

}



