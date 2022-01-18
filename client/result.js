import React, { Component } from "react";
import styled, { css } from "styled-components";

function Result(props) {
  return (
    <Container>
      <KontulariWeather>KONTULARI WEATHER</KontulariWeather>
      <Image src={require("../assets/images/unnamed.png")}></Image>
      <Rect></Rect>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(130,225,193,1);
  border-width: 25px;
  border-color: #000000;
  border-style: solid;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const KontulariWeather = styled.span`
  font-family: Abel;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 72px;
  width: 459px;
  font-size: 50px;
  margin-top: 193px;
  margin-left: 456px;
`;

const Image = styled.img`
  width: 154px;
  height: 100%;
  margin-top: -245px;
  margin-left: 581px;
  object-fit: contain;
`;

const Rect = styled.div`
  width: 583px;
  height: 365px;
  background-color: #E6E6E6;
  border-radius: 24px;
  margin-top: 132px;
  margin-left: 380px;
`;

export default Result;
