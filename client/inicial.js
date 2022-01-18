import React, { Component } from "react";
import styled, { css } from "styled-components";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";

function Inicial(props) {
  return (
    <Container>
      <KontulariWeather>KONTULARI WEATHER</KontulariWeather>
      <Image src={require("../assets/images/unnamed.png")}></Image>
      <Rect>
        <FontAwesomeIcon
          name="search"
          style={{
            color: "rgba(128,128,128,1)",
            fontSize: 40,
            height: 40,
            width: 38,
            marginTop: 28,
            marginLeft: 32
          }}
        ></FontAwesomeIcon>
      </Rect>
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
  width: 463px;
  font-size: 50px;
  margin-top: 287px;
  margin-left: 463px;
`;

const Image = styled.img`
  width: 154px;
  height: 100%;
  margin-top: -302px;
  margin-left: 581px;
  object-fit: contain;
`;

const Rect = styled.div`
  width: 601px;
  height: 96px;
  background-color: #E6E6E6;
  border-radius: 36px;
  flex-direction: column;
  display: flex;
  margin-top: 220px;
  margin-left: 369px;
`;

export default Inicial;
