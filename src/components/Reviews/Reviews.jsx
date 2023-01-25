import {
  ReviewsContainer,
  ReviewsSection,
  Title,
  Text,
  Name,
  Box,
  BoxForButtons,
  Btn,
  ArrowLeft,
  ArrowRight,
} from './Reviews.styled';

const Reviews = () => {
  return (
    <ReviewsSection>
      <ReviewsContainer>
        <Title>What our customers say about us</Title>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularis
        </Text>
        <Name>Ahmed Hridoy</Name>
        <Box>
          <p>* * * * *</p>
          <BoxForButtons>
            <Btn>
              <ArrowLeft size={32} />
            </Btn>
            <Btn>
              <ArrowRight size={32} />
            </Btn>
          </BoxForButtons>
        </Box>
      </ReviewsContainer>
    </ReviewsSection>
  );
};
export default Reviews;
