export interface CardProps {
  id?: string | number[];
  title: string;
  content: string;
  category: string;
  onPress: () => void;
}

export type CategoryColorsProps = {
  universidade: string;
  pesquisa: string;
  outro: string;
  ideia: string;
  podcast: string;
  leitura: string;
  artigo: string;
  inspiração: string;
};
