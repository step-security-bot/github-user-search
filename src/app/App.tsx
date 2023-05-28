import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../common/pages/home/Home';
import PageNotFound from '../common/pages/404/PageNotFound';
import './app.css';
import Header from '../common/components/header/Header';

const App: React.FC = () => {
  return (
    <div className="appContainer">
      <Header />
      <main>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
};

export default App;
