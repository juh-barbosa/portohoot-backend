export interface IEquipe {
  nome: string;
  participantes: IParticipante[];
  icone: string;
  pontuacao: number;
}

interface IParticipante {
  nome: string;
}
