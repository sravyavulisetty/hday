import { Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import PaymentPage from './components/paymentPage';
import HappyElement from './components/happyElement';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<HappyElement/>}></Route>
      <Route path={'/paymentpage'} element={<PaymentPage/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
