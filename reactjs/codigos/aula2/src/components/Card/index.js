import './styles.css';

const Card = ({ children, title, price }) => {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div>{children}</div>
      <div className="card-footer">{price}</div>
    </div>
  );
};

export default Card;
