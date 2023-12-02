import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const CompareSlider = ({
  original,
  restored,
}: {
  original: string;
  restored: string;
}) => {
  return (
    <div>
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage src={original} alt="original photo" />
        }
        itemTwo={
          <ReactCompareSliderImage src={restored} alt="generated photo" />
        }
        className="flex border rounded-md"
        style={{ height: "auto", width: "full" }}
      />
    </div>
  );
};
