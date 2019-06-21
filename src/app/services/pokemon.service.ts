export class PokemonService {
	
	constructor() {}

pokemons=[
  {
    id:1,
  	name : 'Pikachu',
  	type: 'feu',
    taille:'50',
    commentaire: 'Cadeau',
    status:'oui'
  },
  {	
    id:2,
    name : 'Carapuce',
    type: 'eau',
    taille:'30',
    commentaire: 'Cadeau',
    status:'oui'
  },
  {
    id:3,
    name : 'Salameche',
    type: 'feu',
    taille:'40',
    commentaire: 'faiblesse: eau',
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

addPokemon(name: string, type:string,commentaire:string,status: string,taille:string) {
    const pokemonObject = {
      id: 0,
      name: '',
      type:'',
      taille:'',
      commentaire:'',
      status: ''
      
      
      //taille:0
    };
    pokemonObject.name = name;
    pokemonObject.type = type;
    pokemonObject.commentaire = commentaire;
    pokemonObject.status = status;
    pokemonObject.taille = taille;
    pokemonObject.id = this.pokemons[(this.pokemons.length - 1)].id + 1;
    this.pokemons.push(pokemonObject);



}

}