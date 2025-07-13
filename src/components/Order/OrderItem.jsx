import './index.css';

const SERVER_URL = 'http://localhost:4000';
export const OrderItem = ({ name, image }) => {
  // Stejné chování jako v Menu: vždy použij absolutní URL na backend, pokud není image absolutní URL
  let imgSrc = image;
  if (!image.startsWith('http')) {
    imgSrc = SERVER_URL + image;
  }
  return (
    <div className="order-item">
      <img src={imgSrc} className="order-item__image" alt={name} />
      <div className="order-item__name">{name}</div>
    </div>
  );
};
