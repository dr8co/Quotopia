import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import {Box, CircularProgress} from "@mui/material";

export const GradientBackgroundCon = styled.div`
  background: linear-gradient(to right, #fc00ff, #00dbde);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;
  height: 100vh;
  width: 100vw;
  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

export const BackgroundImage1 = styled(Image)`
  position: relative;
  z-index: 1;
  margin-left: 10px;
  margin-top: 10px;

  @media only screen and (max-width: 768px) {
    margin-left: -10px;
    margin-top: -30px;
    scale: 0.8;
  }

  @media only screen and (max-width: 600px) {
    margin-left: -20px;
    margin-top: -50px;
    scale: 0.75;
  }

  @media only screen and (max-width: 480px) {
    margin-left: -30px;
    margin-top: -60px;
    scale: 0.7;
  }

  @media only screen and (max-width: 320px) {
    margin-left: -60px;
    margin-top: -75px;
   scale: 0.6;
  }
`;

export const BackgroundImage2 = styled(Image)`
  position: fixed;
  z-index: 1;
  right: -70px;
  bottom: -5px;

  @media only screen and (max-width: 768px) {
    right: -70px;
    bottom: -5px;
  }

  @media only screen and (max-width: 600px) {
    right: -80px;
    bottom: -5px;
    scale: 0.9;
  }

  @media only screen and (max-width: 480px) {
    right: -90px;
    bottom: -5px;
    scale: 0.8;
  }

  @media only screen and (max-width: 320px) {
    right: -95px;
    bottom: -5px;
    scale: 0.7;
  }
`;

export const FooterCon = styled.div`
  width: 100vw;
  height: 50px;
  text-align: center;
  font-family: 'Source Code Pro', monospace;
  font-size: 15px;
  font-weight: 500;
  position: absolute;
  bottom: 0;
  color: white;
  z-index: 999999;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: gold;
`;

export const QuoteGeneratorCon = styled.div`
  min-height: 350px;
  min-width: 350px;
  height: 70vh;
  width: 60vw;
  //border: 2px solid #ffffff22;
  //border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 2;

  background: rgba(0, 0, 70, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const QuoteGeneratorInnerCon = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
`;

export const QuoteGeneratorTitle = styled.div`
  font-family: 'Dancing script', cursive;
  font-size: 85px;
  text-align: center;
  color: white;
  padding: 0 20px 0 20px;
  position: relative;
  /* media query */
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 50px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 45px;
  }
`;

export const QuoteGeneratorSubTitle = styled.div`
  color: white;
  font-family: 'Caveat', cursive;
  font-size: 35px;
  position: relative;
  width: 100%;
  text-align: center;
  padding: 0 20px 0 20px;
  @media only screen and (max-width: 600px) {
    font-size: 25px;
  }
`;

export const GenerateQuoteButton = styled.div`
  height: 100px;
  width: 300px;
  //border: 2px solid darkgrey;
  //border-radius: 20px;

  //margin-top: 20px;
  position: relative;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  top: 20px;
  margin: auto;
  transform-origin: center;

  background: rgba(0, 0, 70, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  &:hover {
    filter: brightness(3);
    transition: 0.2s all ease-in-out;
    transform: scale(1.1);

    transform-origin: center;
  }
`;

export const GenerateQuoteButtonText = styled.div`
  color: white;
  font-family: 'Caveat', cursive;
  font-size: 35px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
  text-align: center;
`;

export const QuoteGeneratorModalCon = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 70vh;
  //box-shadow: 24;
  transition: 0.2s all ease-in-out;
  background: rgb(193 193 255 / 19%);
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  &:focus {
    outline: none !important;
  }
`;

export const QuoteGeneratorModalInnerCon = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
`;

export const ModalCircularProgress = styled(CircularProgress)`
  color: white !important;
  stroke-linecap: round;
  position: relative;
  /* to account for the larger element pushing left */
  margin-left: -55px;
  left: 50%;
  transform: translateX(-50%);
`;
