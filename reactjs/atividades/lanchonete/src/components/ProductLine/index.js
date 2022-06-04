import {
  LineContainer,
  ItemDefinition,
  ItemValues,
  ItemController,
} from './styles';

import icoHamburger from '../../img/hamburger-cartoon.png';
import icoHotDog from '../../img/hotdog-cartoon.png';
import icoSnack from '../../img/snacks-cartoon.png';
import { useCartContext } from '../../contexts/CartContext';

const ProductLine = (item) => {
  let icon = null;
  switch (item.type) {
    case 'hamburger':
      icon = icoHamburger;
      break;
    case 'hot-dog':
      icon = icoHotDog;
      break;
    case 'snack':
      icon = icoSnack;
      break;
    default:
      icon = null;
  }

  const { addItem, removeItem } = useCartContext();

  return (
    <LineContainer>
      <ItemDefinition>
        <img src={icon} alt="icon" />
        {item.name}
      </ItemDefinition>
      <ItemValues>
        <span>R$ {Number.parseFloat(item.price).toFixed(2)}</span>
        <span>R$ {Number.parseFloat(item.qtd * item.price).toFixed(2)}</span>
      </ItemValues>
      <ItemController>
        <button onClick={() => addItem(item)}>+</button>
        <span>{item.qtd}</span>
        <button onClick={() => removeItem(item.id)}>-</button>
      </ItemController>
    </LineContainer>
  );
};

export default ProductLine;
