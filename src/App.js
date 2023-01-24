import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Pricing from './routes/Pricing';
import Training from './routes/Training';
import Contact from './routes/Contact';
import Slides from './routes/Slides';
import img1 from './assets/space1.jpg'
import img2 from './assets/space2.jpg'
import img3 from './assets/space3.jpg'
import img4 from './assets/space4.jpg'
import img5 from './assets/space5.jpg'
import img6 from './assets/space6.jpg'
import img7 from './assets/space7.jpg'

function App() {

  const slides = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/slides' element={<Slides slides={slides} />} />
      </Routes>
    </>
  );
}

export default App;
