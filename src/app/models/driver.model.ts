import { Race } from './race.model';

export interface Driver {
  _id: string;
  picture: string;
  age: number;
  name: string;
  team: string;
  races: Race[];
}


