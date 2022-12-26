import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Hello from './components/hello/Hello';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </main>
    <Footer />
  </Router>

);

export default App;
