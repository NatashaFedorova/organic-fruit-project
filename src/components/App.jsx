import { Background } from './constants/Background.styled';
import { Container } from './constants/Container.styled';
// import Icon from './Icon/Icon';
import Header from './Header';

export const App = () => {
  return (
    <Background>
      <Header />
      <main>
        <Container></Container>
      </main>
      <footer>
        <Container></Container>
      </footer>
    </Background>
  );
};
