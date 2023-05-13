import { useDispatch } from "react-redux";
import { applyFilter } from "../features/filter/filterSlice";
import Filters from "../common/filters";

const filters = Object.getOwnPropertyNames(Filters);

interface AdjustmentSliderProps {
    name: string;
}

const AdjustmentSlider = ({ name }: AdjustmentSliderProps) => {
    return (
        <div>Hello</div>
    )
}

const AdjustmentSelection = () => {
  return (
    <AdjustmentSlider name='hello' />
  )
}

export default AdjustmentSelection