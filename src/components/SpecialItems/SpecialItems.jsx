import ImgSection from '../../allImages/images/fruit-vegetables-2-min.png';

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
    <SpecialItemsSection>
      <SpecialItemsContainer>
        <Img src={ImgSection} width="600" alt="fruit and vegetables" />
        <Box>
          <Title>Explore our special items</Title>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer...
          </Text>
          <BoxForBtn>
            <TextForBtn>Explore now</TextForBtn>
            <OrderBtn type="button">
              <OrderBtnIcon size={32} />
            </OrderBtn>
          </BoxForBtn>
        </Box>
      </SpecialItemsContainer>
    </SpecialItemsSection>
  );
};

export default SpecialItems;
