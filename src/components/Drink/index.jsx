import './index.css';
import { Layer } from '../Layer';

export const Drink = ({ image, name, layers, orderId, ordered, id, onOrderChange }) => (
  <div className="drink">
    <div className="drink__product">
      <div className="drink__cup">
        <img src={image} />
      </div>
      <div className="drink__info">
        <h3>{name}</h3>
        {layers.map((layer, idx) => (
          <Layer key={idx} color={layer.color} label={layer.label} />
        ))}
      </div>
    </div>
    <form className="drink__controls" data-id={id} onSubmit={e => { e.preventDefault(); onOrderChange(id); }}>
      <input type="hidden" className="order-id" value={orderId} />
      <button type="submit" className={`order-btn${ordered ? ' order-btn--ordered' : ''}`}>{ordered ? 'Zrušit' : 'Objednat'}</button>
    </form>
  </div>
);
