import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensures modal JS is included
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/home/HomeScreen';
import Wishlist from './screens/wishlist/Wishlist';
import Header from './components/header/Header';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomeScreen />} />
          <Route path="/wishlist" element={<Wishlist />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
