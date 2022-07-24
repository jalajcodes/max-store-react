import { useCallback, useEffect, useState, useRef } from "react";
import "./Styles/rangeSlider.scss";

const RangeSlider = ({ min, max, setMin, setMax, onPriceChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    setMin && setMinVal(setMin);
    setMax && setMaxVal(setMax);
  }, [setMin, setMax]);

  return (
    <div className="slider-container">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        onMouseUp={() => onPriceChange({ min: minVal, max: maxVal })}
        className={`thumb thumb--zindex-3 ${
          minVal > max - 100 && "thumb--zindex-5"
        }`}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        onMouseUp={() => onPriceChange({ min: minVal, max: maxVal })}
        className="thumb thumb--zindex-4"
      />

      <div className="range-slider">
        <div className="range-slider__track" />
        <div ref={range} className="range-slider__range" />
        <div className="range-slider__left-value">₹{minVal}</div>
        <div className="range-slider__right-value">₹{maxVal}</div>
      </div>
    </div>
  );
};

export default RangeSlider;
