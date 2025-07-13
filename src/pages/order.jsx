
import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Order } from '../components/Order';

const API_BASE = 'http://localhost:4000/api';
const root = document.querySelector('#root');

const loadOrder = async () => {
  const response = await fetch(`${API_BASE}/drinks?filter=ordered:eq:true&select=id,name,image`);
  const data = await response.json();
  const items = data.data || [];

  root.innerHTML = render(
    <div className="page">
      <Header showMenu={false} />
      <main className="order">
        <div className="container order__content">
          <h1>Vaše objednávka</h1>
          <Order items={items} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

loadOrder();
