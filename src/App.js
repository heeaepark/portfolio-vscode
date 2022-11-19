import { useEffect } from 'react';

/* components import */
import Layout from './components/Layout';

import './styles/global.css'; //global style import
import './styles/theme.css'; // theme style import

function App() {
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme", localStorage.getItem("theme")
      );
    }
  }, []);
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
