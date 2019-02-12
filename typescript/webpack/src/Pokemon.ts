enum Types {
	'Normal',
	'Fire',
	'Fighting',
	'Water',
	'Flying',
	'Grass',
	'Poison',
	'Electric',
	'Ground',
	'Psychic',
	'Rock',
	'Ice',
	'Bug',
	'Dragon',
	'Ghost',
	'Dark',
	'Steel',
	'Fairy',
	'???',
}

type Image = {
	source: string,
	path: string;
}

abstract class Pokemon {
	pokedexNum: number;
	_images: Image[];
	name?: string;
	level: number;
	height: number;
	weight: number;
	_types: Types[];

	constructor(level: number) {
		this.level = level;
	}

	get images(): string {
		return this._images.map((v, i) => {
		  return `<img src="${v.path}" title="${this.constructor.name}, Source: ${v.source}" />`;
		}).join('');
	}

	get types(): string {
		return this._types.map((v) => {
		  return Types[v];
		}).join(', ');
	}

	get stats(): string {
		let stats = '';

		stats = `<ul>
			<li>Pokedex Number: ${this.pokedexNum}</li>`;

		if (this.name != null) {
			stats += `<li>Name: ${this.name}</li>`;
		}

		stats += `<li>Level: ${this.level}</li>
			<li>Types: ${this.types}</li>
			</ul>`;

		return stats;
	}

	changeName = (name): void => {
		this.name = name;
	}

	render = (): string => `
		<div class="pokemon">
		${this.images}
		<div class="stats">
			${this.stats}
		</div>
		</div>
	`
}

class Bulbasaur extends Pokemon {
	pokedexNum = 1;
	_images = [
		{ source: 'Bulbapedia', path: 'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png' }
	];
	_types = [Types.Grass, Types.Poison];
}

class Pikachu extends Pokemon {
	pokedexNum = 25;
	_images = [
		{ source: 'Bulbapedia', path: 'https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png' },
	];
	_types = [Types.Electric];
}

class Meowth extends Pokemon {
	pokedexNum = 52;
	_images = [
		{ source: 'Bulbapedia', path: 'https://cdn.bulbagarden.net/upload/thumb/d/d6/052Meowth.png/250px-052Meowth.png' }
	];
	_types = [Types.Normal];
}

class Trainer {
	_images: Image[] = [];
	name: string;
	_party: Array<Pokemon> = [];

	constructor(name: string) {
		this.name = name;
	}

	set image(image: Image) {
		this._images.push(image);
	}

	get images(): string {
		return this._images.map((v, i) => {
			return `<img src="${v.path}" title="${this.constructor.name}, Source: ${v.source}" />`;
		}).join('');
	}

	addPokemonToParty = (pokemon: Pokemon[]): void => {
		this._party = [...this._party, ...pokemon];
	}

	get party(): string {
		return `
			<div id="party">
				${this._party.map((v) => {
					return v.render();
				}).join('')}
			</div>`;
	}

	render = (): string => `
		${this.images}
		${this.name}
		${this.party}
	`;
}

const ellie: Trainer = new Trainer('Ellie');
ellie.addPokemonToParty([new Bulbasaur(5), new Pikachu(7), new Meowth(3)]);
ellie.image = { source: 'self', path: './assets/Pokemon-prof-Ellie.png' };

document.querySelector('#trainer').innerHTML = ellie.render();
