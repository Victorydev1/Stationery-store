import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import ShopContextProvider from './Components/Context/ShopContext'


createRoot(document.getElementById('root')).render(
<ShopContextProvider>
  <App />
</ShopContextProvider>
)
