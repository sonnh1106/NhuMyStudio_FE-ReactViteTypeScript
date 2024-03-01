import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import "./style2.scss";
export default function KeenSlider() {
  const [sliderRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider overflow-hidden">
      <div className="keen-slider__slide number-slide1"></div>
      <div className="keen-slider__slide number-slide2"></div>
      <div className="keen-slider__slide number-slide3"></div>
      <div className="keen-slider__slide number-slide4"></div>
      <div className="keen-slider__slide number-slide5"></div>
      <div className="keen-slider__slide number-slide6"></div>
    </div>
  );
}
