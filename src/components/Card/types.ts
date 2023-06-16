export interface CardProps {
  id?: string | number[];
  title: string;
  content: string;
  category: string;
  navigation: () => void;
}

export type CategoryColorsProps = {
  aleatório: string;
  universidade: string;
  pesquisa: string;
  outro: string;
  ideia: string;
  podcast: string;
  leitura: string;
  artigo: string;
  inspiração: string;
};
