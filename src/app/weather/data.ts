import { Coords } from './coord';
import { Weather } from './weather';
import { Base } from './base';
import { Main } from './main';
import { Wind } from './wind';
import { Clouds } from './clouds';
import { Sys } from './sys';

export class Data {
    coords: Coords;
    weather: Weather;
    base: Base;
    main: Main;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    id: number;
    name: String;
    cod: number;
}
