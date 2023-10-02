import Item from './Item';

type BurgerData = {
  id: number;
  nome: string;
  carne: string;
  pao: string;
  opcionais: Item[];
  status: string;
};

export default BurgerData;
