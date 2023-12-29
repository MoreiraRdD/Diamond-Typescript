interface PokemonStats {
  base_stat: number;
  stat: string;
}

class Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  legendary: boolean;
  firstAppearance: string;
  abilities: string[];
  stats: PokemonStats[];

  constructor(data: Pokemon) {
    this.id = data.id || 0;
    this.name = data.name || "";
    this.base_experience = data.base_experience || 0;
    this.height = data.height || 0;
    this.weight = data.weight || 0;
    this.legendary = data.legendary || false;
    this.firstAppearance = data.firstAppearance || "";
    this.abilities = data.abilities || [];
    this.stats = data.stats || [];
  }
}

// Criando uma instância do Pokémon Ditto
const dittoData: Pokemon = {
  id: 132,
  name: "Ditto",
  base_experience: 101,
  height: 3,
  weight: 40,
  legendary: false,
  firstAppearance: "1996-06-01",
  abilities: ["limber", "imposter"],
  stats: [
    {
      base_stat: 48,
      stat: "hp",
    },
    {
      base_stat: 48,
      stat: "attack",
    },
    {
      base_stat: 48,
      stat: "defense",
    },
  ],
};

const ditto = new Pokemon(dittoData);

console.log(ditto);


class Filme {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

  constructor(data: Filme) {
    this.adult = data.adult || false;
    this.backdrop_path = data.backdrop_path || "";
    this.id = data.id || 0;
    this.original_language = data.original_language || "";
    this.original_title = data.original_title || "";
    this.overview = data.overview || "";
    this.popularity = data.popularity || 0;
    this.poster_path = data.poster_path || "";
    this.release_date = data.release_date || "";
    this.title = data.title || "";
    this.video = data.video || false;
    this.vote_average = data.vote_average || 0;
    this.vote_count = data.vote_count || 0;
  }
}

// Criando uma instância do filme "Guardians of the Galaxy Vol. 3"
const guardiansData: Filme = {
  adult: false,
  backdrop_path: "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
  id: 447365,
  original_language: "en",
  original_title: "Guardians of the Galaxy Vol. 3",
  overview:
    "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
  popularity: 4145.055,
  poster_path: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
  release_date: "2023-05-03",
  title: "Guardians of the Galaxy Vol. 3",
  video: false,
  vote_average: 8.1,
  vote_count: 3154,
};

const guardiansMovie = new Filme(guardiansData);

console.log(guardiansMovie);


class Pais {
  name: {
    common: string;
    official: string;
  };
  independent: boolean;
  unMember: boolean;
  capital: string;
  region: string;
  subregion: string;
  languages: string[];
  latlng: number[];
  borders: string[];
  area: number;
  population: number;
  timezones: string[];
  flags: {
    png: string;
    svg: string;
  };

  constructor(data: Pais) {
    this.name = data.name || { common: "", official: "" };
    this.independent = data.independent || false;
    this.unMember = data.unMember || false;
    this.capital = data.capital || "";
    this.region = data.region || "";
    this.subregion = data.subregion || "";
    this.languages = data.languages || [];
    this.latlng = data.latlng || [];
    this.borders = data.borders || [];
    this.area = data.area || 0;
    this.population = data.population || 0;
    this.timezones = data.timezones || [];
    this.flags = data.flags || { png: "", svg: "" };
  }
}

// Criando uma instância para o país "Brazil"
const brazilData: Pais = {
  name: {
    common: "Brazil",
    official: "Federative Republic of Brazil",
  },
  independent: true,
  unMember: true,
  capital: "Brasília",
  region: "Americas",
  subregion: "South America",
  languages: ["Portuguese"],
  latlng: [-10, -55],
  borders: [
    "ARG",
    "BOL",
    "COL",
    "GUF",
    "GUY",
    "PRY",
    "PER",
    "SUR",
    "URY",
    "VEN",
  ],
  area: 8515767,
  population: 212559409,
  timezones: ["UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00"],
  flags: {
    png: "https://flagcdn.com/w320/br.png",
    svg: "https://flagcdn.com/br.svg",
  },
};

const brazil = new Pais(brazilData);

console.log(brazil);

    