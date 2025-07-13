import './index.css';
import { OrderItem } from './OrderItem';

export const Order = ({ items }) => (
  <div className="order__items">
    {items.length === 0 ? (
      <p className="empty-order">Zatím nemáte nic objednáno</p>
    ) : (
      items.map((item) => (
        <OrderItem key={item.id} name={item.name} image={item.image} />
      ))
    )}
  </div>
);
