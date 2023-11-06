import './App.scss';
import Navbar from './components/navbar/Navbar';
import Test from './Test';
import { Home } from './components/home/home';
import { About } from './components/about/about';
const App = () => {
  return <div>
      <section id='Home'>
        <Navbar/>
        <Home/>
      </section> 
    <section id='About'>
      <About/>
    </section>
    <section id='Abou'>parallax</section>
    <section id='Services'>servives</section>
    <section id='Contact'>parallax</section>
    <section id='Portfolio'>portfolio 1</section>
    <section>portfolio 2</section>
    <section>portfolio 3</section>
  </div>;
};

export default App;
