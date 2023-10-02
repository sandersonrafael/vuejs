import Item from './Item';

type BurgerFormData = {
    paes: Item[];
    carnes: Item[];
    opcionaisData: Item[];
    nome: string;
    pao: string;
    carne: string;
    opcionais: Item[];
    msg: string;
};

export default BurgerFormData;
