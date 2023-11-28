import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';

import './App.css';
import Banner from './pages/Banner';
import Header from './pages/Header';
import Main from './pages/Main';
import { SearchContext } from './context/SearchContext';

function App() {
  return (
    <SearchContext>
      <Header />
      <Banner />
      <Main />
    </SearchContext>
  );
}

export default App;
