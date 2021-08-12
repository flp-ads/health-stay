import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <div>
      <AnimatePresence>
        <GlobalStyle />
        <ToastContainer />
        <Routes />
      </AnimatePresence>
    </div>
  );
}

export default App;
