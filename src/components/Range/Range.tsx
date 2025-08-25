import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import './Range.css'

interface RangeProps {
  value: number
  min: number
  max: number
}

export const Range = ({ ...props }: RangeProps) => {
  return <Slider {...props} step={1} />
}
