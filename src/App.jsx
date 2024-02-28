import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer';
import Banner from './components/Banner';




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailsContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
