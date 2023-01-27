import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {
  ReviewsContainer,
  ReviewsSection,
  Title,
  Text,
  Name,
  Box,
  Info,
  BoxForButtons,
  Btn,
  ArrowLeft,
  ArrowRight,
  Img,
  BoxForImg,
} from './Reviews.styled';
import ImgSrc from '../../allImages/images/customers-min.png';

const Reviews = () => {
  return (
    <ReviewsSection id="reviews">
      <ReviewsContainer>
        <Box>
          <Info>
            <Title>What our customers say about us</Title>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularis
            </Text>
            <Name>Ahmed Hridoy</Name>
            <div>
              <AiFillStar size={22} color="#F1B90B" />
              <AiFillStar size={22} color="#F1B90B" />
              <AiOutlineStar size={22} color="#F1B90B" />
              <AiOutlineStar size={22} color="#F1B90B" />
              <AiOutlineStar size={22} color="#F1B90B" />
            </div>
          </Info>

          <BoxForImg>
            <Img src={ImgSrc} width="447" height="445" alt="person" />
          </BoxForImg>
        </Box>
        <BoxForButtons>
          <Btn>
            <ArrowLeft size={32} />
          </Btn>
          <Btn>
            <ArrowRight size={32} />
          </Btn>
        </BoxForButtons>
      </ReviewsContainer>
    </ReviewsSection>
  );
};
export default Reviews;
