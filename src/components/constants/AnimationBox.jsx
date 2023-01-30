import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const AnimationBox = ({
  children,
  animateIn,
  duration,
  scrollableParentSelector,
}) => {
  return (
    <AnimationOnScroll
      offset="100"
      animateIn={animateIn}
      duration={duration}
      animateOnce={1}
      animatePreScroll="false"
      initiallyVisible="false"
    >
      {children}
    </AnimationOnScroll>
  );
};

export default AnimationBox;
