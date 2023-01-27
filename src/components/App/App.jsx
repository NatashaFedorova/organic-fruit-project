import { Main } from 'components/constants/DefaultStyle.styled';
import Download from 'components/Download';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import Reviews from 'components/Reviews';
import Service from 'components/Service';
import SpecialItems from 'components/SpecialItems';
import { Background } from '../constants/Background.styled';
// import Icon from './Icon/Icon';
import Header from '../Header';

const App = () => {
  return (
    <Background>
      <Header />
      <Main>
        <Hero />
        <Service />
        <SpecialItems />
        <Reviews />
        <Download />
      </Main>
      <Footer />
    </Background>
  );
};

export default App;
