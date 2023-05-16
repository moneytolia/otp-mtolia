import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

export const StyledDiv = styled.div`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0 !important;
  }
`

export interface IProps {
  inputCount: number
  onChangedOtp: (type1: string) => void
  inputClassName?: string
}

let currentOTPIndex = 0
const backSpace = 'Backspace'

export const onlyNumberControl = (value: any) => {
  return value.replace(/\D/g, '')
}

export const OtpInput = ({ inputCount, onChangedOtp, inputClassName }: IProps) => {
  const [otp, setOtp] = useState<string[]>(new Array(inputCount).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const numberValue = onlyNumberControl(value);
    const newOTP: string[] = [...otp];

    if (numberValue.length > 2) {
      const maxIndex = inputCount - 1;
      const valueArr = numberValue.split("");

      valueArr.forEach((val: string, index: number) => {
        if (index <= maxIndex) {
          newOTP[index] = val;
        }
      });
      currentOTPIndex = valueArr.length >= maxIndex ? inputCount : valueArr.length;
      setActiveOTPIndex(currentOTPIndex - 1);
    } else {
      newOTP[currentOTPIndex] = numberValue.substring(numberValue.length - 1);
      if (!numberValue) setActiveOTPIndex(currentOTPIndex - 1);
      else setActiveOTPIndex(currentOTPIndex + 1);
    }
    setOtp(newOTP);
    onChangedOtp(newOTP.join(''));
  };

  const handleOnKeyDown = (event: any, index: number) => {
    currentOTPIndex = index;
    setTimeout(() => {
      if (event.key === backSpace) setActiveOTPIndex(currentOTPIndex - 1);
    }, 10);
  };
  

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  return (
    <StyledDiv>
      {otp.map((_item, index) => {
        return (
          <React.Fragment key={index}>
            <input
              ref={index == activeOTPIndex ? inputRef : null}
              type="text"
              inputMode="numeric"
              className={inputClassName}
              onChange={handleOnChange}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              value={otp[index]}
              autoComplete="one-time-code"
              onInput={handleOnChange}
            />
            {index === otp.length - 1 ? null : <span />}
          </React.Fragment>
        );
      })}
   </StyledDiv>
  );
};

export default OtpInput;