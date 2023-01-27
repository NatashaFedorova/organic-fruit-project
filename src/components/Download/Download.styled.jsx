import { Container } from 'components/constants/Container.styled';
import { TextDefault } from 'components/constants/DefaultStyle.styled';
import { SectionTitle } from 'components/Service/Service.styled';
import styled from 'styled-components';

export const DownloadSection = styled.section`
  padding-top: 150px;
  padding-bottom: 140px;
`;

export const DownloadContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 113px;
  padding-left: 200px;
  padding-right: 200px;
`;

export const Img = styled.img`
  width: 265px;
  height: 496px;
`;

export const Info = styled.div``;

export const PreTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 40px;
  border-radius: 50px;
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1;
  color: ${props => props.theme.colors.preTitle};
  background-color: ${props => props.theme.colors.backgroudAccent};
`;

export const Title = styled(SectionTitle)``;

export const Text = styled(TextDefault)`
  margin-bottom: 50px;
  width: 574px;
  text-align: justify;
`;

export const Link = styled.a``;

export const BoxForIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const ImgIcon = styled.img`
  width: 104px;
  height: 30px;
`;
