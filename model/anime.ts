export interface AnimeModel {
  _id: string;
  title: string;
  image: string;
  date: animeDate;
  external: string[];
}

export interface animeDate {
  airing: boolean;
  day: string;
  year: string;
  season: string;
}

export interface DateAnime {
  day: string;
  daySimple: string;
  animes: AnimeModel[];
}
