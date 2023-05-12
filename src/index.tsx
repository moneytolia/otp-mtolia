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
  const [otp, setOtp] = useState<string[]>(new Array(inputCount).fill(''))
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    const newOTP: string[] = [...otp]

    if (value.length > 2) {
      const maxIndex = inputCount - 1
      const valueArr = onlyNumberControl(value).split('')
      valueArr.forEach((val: string, index: number) => {
        if (index <= maxIndex) {
          newOTP[index] = val
        }
      })
      currentOTPIndex = valueArr.length >= maxIndex ? inputCount : valueArr.length
      setActiveOTPIndex(currentOTPIndex - 1)
    } else {
      newOTP[currentOTPIndex] = value.substring(value.length - 1)
      if (!value) setActiveOTPIndex(currentOTPIndex - 1)
      else setActiveOTPIndex(currentOTPIndex + 1)
    }
    setOtp(newOTP)
    onChangedOtp(newOTP.join(''))
  }

  const handleOnKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    currentOTPIndex = index
    setTimeout(() => {
      if (key === backSpace) setActiveOTPIndex(currentOTPIndex - 1)
    }, 10)
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [activeOTPIndex])

  return (
    <StyledDiv>
      {otp.map((_item, index) => {
        return (
          <React.Fragment key={index}>
            <input
              ref={index == activeOTPIndex ? inputRef : null}
              type='number'
              inputMode='numeric'
              className={inputClassName}
              onChange={handleOnChange}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              value={otp[index]}
              autoComplete='one-time-code'
            />
            {index === otp.length - 1 ? null : <span />}
          </React.Fragment>
        )
      })}
    </StyledDiv>
  )
}

export default OtpInput;