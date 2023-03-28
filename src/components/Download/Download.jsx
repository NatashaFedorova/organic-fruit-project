import AnimationBox from 'components/constants/AnimationBox';
import {
  DownloadSection,
  DownloadContainer,
  PreTitle,
  Title,
  Text,
  Link,
  Info,
  BoxForIcons,
  ImgIcon,
  Img,
} from './Download.styled';

import IconGoolePlay from '../../allImages/icons/google-play.svg';
import IconAppStore from '../../allImages/icons/app-store.svg';

import ImgPhones from '../../allImages/images/phones-min.png';

const Download = () => {
  return (
    <DownloadSection id="download">
      <DownloadContainer>
        <Img src={ImgPhones} alt="phones" />
        <Info>
          <AnimationBox animateIn={['animate__fadeInDown']} duration={1.25}>
            <PreTitle>Download app</PreTitle>
          </AnimationBox>
          <AnimationBox animateIn={['animate__fadeInRight']} duration={1.25}>
            <Title>An easy way to order organic fruit</Title>
          </AnimationBox>
          <AnimationBox animateIn={['animate__fadeInRight']} duration={1.5}>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer...
            </Text>
          </AnimationBox>
          <BoxForIcons>
            <AnimationBox animateIn={['animate__flipInX']} duration={1.25}>
              <Link
                href="https://www.apple.com/ua/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImgIcon src={IconAppStore} alt="icon" />
              </Link>
            </AnimationBox>
            <AnimationBox animateIn={['animate__flipInX']} duration={1.25}>
              <Link
                href="https://play.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImgIcon src={IconGoolePlay} />
              </Link>
            </AnimationBox>
          </BoxForIcons>
        </Info>
      </DownloadContainer>
    </DownloadSection>
  );
};

export default Download;
