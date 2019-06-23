export class PokemonService {
	
	constructor() {}

pokemons=[
  {
    id:0,
  	name : 'Pikachu',
  	type: 'électivité',
    taille:'50cm',
    commentaire: 'Acheté chez leboncoin.fr',
    status:'oui'
  },
  {	
    id:1,
    name : 'Carapuce',
    type: 'eau',
    taille:'30cm',
    commentaire: 'Offert avec le menu Maxi Best Of',
    status:'oui'
  },
  {
    id:2,
    name : 'Salameche',
    type: 'feu',
    taille:'40cm',
    commentaire: 'Relache son potentiel lors des camping',
    status:'non'
  }
  ];
getPokemonById(id:number){
  const pokemon=this.pokemons.find(
    (pokemonObjet)=>{
      return pokemonObjet.id===id;
    }
    );
    return pokemon;
}

switchCatchAll() {
    for(let pokemon of this.pokemons) {
      pokemon.status = 'oui';
    }
}

switchNotCatchAll() {
    for(let pokemon of this.pokemons) {
      pokemon.status = 'non';
    }
}
switchCatchOne(i: number) {
    this.pokemons[i].status = 'oui';
}

switchNotCatchOne(i: number) {
    this.pokemons[i].status = 'non';
}

deletePokemon(i: number) {
    this.pokemons.splice(i,1);
}

addPokemon(name: string, type:string,commentaire:string,status: string,taille:string) {
    const pokemonObject = {
      id: 999,
      name: '',
      type:'',
      taille:'',
      commentaire:'',
      status: ''  
    };
    pokemonObject.name = name;
    pokemonObject.type = type;
    pokemonObject.commentaire = commentaire;
    pokemonObject.status = status;
    pokemonObject.taille = taille;
    pokemonObject.id = this.pokemons[(this.pokemons.length - 1)].id + 1;
    this.pokemons.push(pokemonObject);
}
updatePokemon(id:number,newName: string, newType:string,newCommentaire:string,newStatus: string,newTaille:string) {
  this.pokemons[id].name=newName;
  this.pokemons[id].type=newType;
  this.pokemons[id].commentaire=newCommentaire;
  this.pokemons[id].status=newStatus;
  this.pokemons[id].taille=newTaille;

}

}