import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/theme-context/ThemeContext.jsx'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
<StrictMode>
    <ToastContainer />
    <App />
  </StrictMode>,
  </ThemeProvider>

)
