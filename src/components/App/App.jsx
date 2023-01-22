import { Main, Footer } from 'components/constants/DefaultStyle.styled';
import Hero from 'components/Hero';
import { Background } from '../constants/Background.styled';
import { Container } from '../constants/Container.styled';
// import Icon from './Icon/Icon';
import Header from '../Header';

const App = () => {
  return (
    <Background>
      <Header />
      <Main>
        <Hero />
      </Main>
      <Footer>
        <Container></Container>
      </Footer>
    </Background>
  );
};

export default App;
