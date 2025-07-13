
import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const API_BASE = 'http://localhost:4000/api';
// get data from api
const response = await fetch(`${API_BASE}/drinks`);
const data = await response.json();
const drinksData = data.data;


document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinksData}/>
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

// Čistě JS řešení pro přepínání tlačítka objednat/zrušit
setTimeout(() => {
  document.querySelectorAll('.drink__controls').forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const id = form.dataset.id;
      const ordered = form.dataset.ordered === 'true';
      // PATCH požadavek na objednání nebo zrušení objednávky
      fetch(`http://localhost:4000/api/drinks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          { op: 'replace', path: '/ordered', value: !ordered }
        ]),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('API odpověď:', data);
          window.location.reload();
        })
        .catch((err) => {
          console.error('Chyba při PATCH:', err);
        });
    });
  });
}, 0);

// Hamburger menu toggle
setTimeout(() => {
  const navBtn = document.querySelector('.nav-btn');
  const nav = document.querySelector('.rollout-nav');
  if (navBtn && nav) {
    navBtn.addEventListener('click', () => {
      nav.classList.toggle('nav-closed');
    });
    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        nav.classList.add('nav-closed');
      }
    });
  }
}, 0);
