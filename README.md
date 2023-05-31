<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./brand.png" alt="Project logo"></a>
</p>

<h3 align="center">otp-mtolia</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/gizemay96/otp.svg)](https://github.com/gizemay96/otp/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/gizemay96/otp.svg)](https://github.com/gizemay96/otp/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<br>
<br>

<p align="center"> Intro </p>

<p align="center">
  <img src="./otp.gif" alt="Gif Başlığı">
</p>

<br>
<br>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

<br>

## 🧐 About <a name = "about"></a>

With this library, you can get a ready input where you can get your one-time passwords from the user and style it. The user can fill in the input with a single button on the clipboard on mobile devices.

<br>

## 🏁 Getting Started <a name = "getting_started"></a>

This package is made for reactjs. First, review the Prerequisites section below. And if there is a missing package in your project, install it.

### Prerequisites

What things you need to install the software and how to install them.

```
npm i react
```

```
npm i typescript
```

### Installing

Firstly, add the npm package to your project by typing the following line into the terminal.


```
npm i otp-mtolia
```


## 🎈 Usage <a name="usage"></a>

```
import OtpInput from "otp-mtolia";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styles from "../otp/otp.module.scss";

interface otpForm {
  otp: any;
}

export const OtpScreen = () => {

  //#region Form & Submit
  const {
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
    setValue,
  } = useForm<otpForm>({});

  const onSubmit: SubmitHandler<otpForm> = (data) => {
    console.log(data);
  };

  //#endregion

  //#region JSX
  return (
    <div className={styles.otpScreen}>

      <h4>OTP Page</h4>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* OTP From Package*/}
        <OtpInput inputCount={6} onChangedOtp={(value: string) => setValue('otp', value)} inputClassName={styles.otpInput} />

        <button type="submit">  Submit </button>
      </form>
      
    </div>
  );
  //#endregion
};

```
<br>
<br>
<br>
<br>

<table>
<tr>
<th></th>
<th>Key</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>

<tr>
<td>@Input</td>
<td>inputCount</td>
<td>number</td>
<td>4</td>
<td>Otp input count</td>
</tr>

<tr>
<td>@Input</td>
<td>inputClassName</td>
<td>string</td>
<td>""</td>
<td>You can style the input by assigning a value to the class name you have given to this field.</td>
</tr>

<tr>
<td>@Output</td>
<td>onChangedOtp</td>
<td>Function</td>
<td>-</td>
<td>Last value entered in the input</td>
</tr>

</table>

<br>
<br>
<br>

## ⛏️ Built Using <a name = "built_using"></a>

- [ReactJs](https://react.dev/) - Framework
- [styled-components](https://www.npmjs.com/package/styled-components) - Styling
- [TypeScript](https://www.npmjs.com/package/typescript)

## ✍️ Authors <a name = "authors"></a>

- [@moneytolia](https://github.com/moneytolia) - Idea & Initial work
- [@ercancan](https://github.com/lErcanl) - Developer
- [@gizemay](https://github.com/gizemay96) - Developer
- [@suayipdemirci](https://github.com/kylelobo) - Developer
- [@baranörek](https://github.com/kylelobo) - Developer