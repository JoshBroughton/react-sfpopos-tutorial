import logo from './logo.svg';
import './App.css';

import Title from './components/Title'
import POPOSList from './components/POPOSList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <Footer />
    </div>
  );
}

export default App;
