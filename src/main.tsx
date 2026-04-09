import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'; 
import { AuthProvider } from './features/auth/AuthContext'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Provider } from 'react-redux';
import { store } from './store';

<Provider store={store}>
  <App />
</Provider>  
  
createRoot(document.getElementById('root')!).render( 
  <StrictMode> 
    <BrowserRouter> 
      <AuthProvider> 
        <App /> 
      </AuthProvider> 
    </BrowserRouter> 
  </StrictMode> 
); 
