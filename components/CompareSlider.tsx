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
        className="flex mt-5 border rounded-md"
        style={{ height: "auto", width: "full" }}
      />
      <span className="text-sm text-stone-600">
        (Drag the slider left and right to see before and after MyArchitectureAI)
      </span>
    </div>
  );
};
