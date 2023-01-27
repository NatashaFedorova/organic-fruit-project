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
          <PreTitle>Download app</PreTitle>
          <Title>An easy way to order organic fruit</Title>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer...
          </Text>
          <BoxForIcons>
            <Link
              href="https://www.apple.com/ua/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImgIcon src={IconAppStore} alt="icon" />
            </Link>
            <Link
              href="https://play.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImgIcon src={IconGoolePlay} />
            </Link>
          </BoxForIcons>
        </Info>
      </DownloadContainer>
    </DownloadSection>
  );
};

export default Download;
