export class jornadas {
  constructor(
    public _id: string,
    public No_Jornada: String,
    public partidos: [{
      equipo1: String,
      puntuacion1: Number,
      equipo2: String,
      puntuacion2: Number
    }],
    public Liga: String
  ) { }
}
