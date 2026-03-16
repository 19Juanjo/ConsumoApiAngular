export interface ApiHugo {

  id: number;
  name: string;

  season: number;
  number: number;

  summary: string;

  image?: {
    medium: string;
    original: string;
  };

}