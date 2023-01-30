import ImgSection from '../../allImages/images/fruit-vegetables-2-min.png';
import AnimationBox from 'components/constants/AnimationBox';

import {
  SpecialItemsContainer,
  SpecialItemsSection,
  Box,
  Img,
  Title,
  Text,
  TextForBtn,
  OrderBtn,
  OrderBtnIcon,
  BoxForBtn,
} from './SpecialItems.styled';

const SpecialItems = () => {
  return (
    <SpecialItemsSection id="menu">
      <SpecialItemsContainer>
        <Img src={ImgSection} width="600" alt="fruit and vegetables" />
        <Box>
          <AnimationBox animateIn={['animate__fadeInDown']} duration={1.25}>
            <Title>Explore our special items</Title>
          </AnimationBox>
          <AnimationBox animateIn={['animate__fadeInRight']} duration={1.25}>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer...
            </Text>
          </AnimationBox>

          <BoxForBtn>
            <AnimationBox animateIn={['animate__fadeInRight']} duration={1.25}>
              <TextForBtn>Explore now</TextForBtn>
            </AnimationBox>
            <AnimationBox animateIn={['animate__fadeInLeft']} duration={1.25}>
              <OrderBtn type="button">
                <OrderBtnIcon size={32} />
              </OrderBtn>
            </AnimationBox>
          </BoxForBtn>
        </Box>
      </SpecialItemsContainer>
    </SpecialItemsSection>
  );
};

export default SpecialItems;
