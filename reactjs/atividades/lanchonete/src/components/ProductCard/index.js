import {
  Container,
  ContainerHeader,
  ContainerMain,
  ContainerFooter,
} from './styles';

import icoHamburger from '../../img/hamburger-cartoon.png';
import icoHotDog from '../../img/hotdog-cartoon.png';
import icoSnack from '../../img/snacks-cartoon.png';
import { useCartContext } from '../../contexts/CartContext';

const ProductCard = (item) => {
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

  const { addItem, removeItem, findItem } = useCartContext();
  const cartItem = findItem(item.id);

  return (
    <Container>
      <ContainerHeader>
        <img src={icon} alt="Icon" />
        {item.name}
        <div>
          <button onClick={() => addItem(item)}>+</button>
          <span>{cartItem ? cartItem.qtd : 0}</span>
          <button onClick={() => removeItem(item.id)}>-</button>
        </div>
      </ContainerHeader>
      <ContainerMain>
        <img src={item.img} alt="Imagem do produto" />
        <ul>
          {item.items.map((k) => (
            <li>{k}</li>
          ))}
        </ul>
      </ContainerMain>
      <ContainerFooter>
        R$ {Number.parseFloat(item.price).toFixed(2)}
      </ContainerFooter>
    </Container>
  );
};

export default ProductCard;
