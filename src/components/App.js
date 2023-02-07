import './App.css';
import { Outlet } from 'react-router-dom';

import Title from './Title/Title'
import POPOSList from './POPOSList/POPOSList';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
