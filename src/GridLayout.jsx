import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const GridLayout = () => {
  const wrapperTop = useRef();
  const wrapperBott = useRef();
  const [heightWrapperTop, setHeightWrapperTop] = useState();
  const [heightWrapperBott, setHeightWrapperBott] = useState();
  useEffect(() => {
    setHeightWrapperTop(wrapperTop.current.getBoundingClientRect().height);
  }, []);

  useEffect(() => {
    setHeightWrapperBott(wrapperBott.current.getBoundingClientRect().height);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        margin: "50px auto",
        display: "grid",
        rowGap: "20px",
        gridTemplateRows: `${heightWrapperTop}px ${heightWrapperBott}px`,
      }}
    >
      <WrapperTop ref={wrapperTop}>
        <WrapperDuration>
          <label>Duration</label>
          <Box>
            <span>Half Day</span>
          </Box>
        </WrapperDuration>
        <WrapperMorning>
          <Box>
            <span>Morning</span>
          </Box>
        </WrapperMorning>
      </WrapperTop>
      <WrapperBottom ref={wrapperBott}>
        <Box>From </Box>
        <Box>To</Box>
      </WrapperBottom>
    </div>
  );
};

const WrapperTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 14px;
  color: #282423;
  font-weight: 500;
  column-gap: 20px;
`;

const Box = styled.div`
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  height: 55px;
  color: #727272;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  display: flex;
  padding-left: 15px;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
`;

const WrapperMorning = styled.div`
  margin-top: auto;
`;

const WrapperBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const WrapperDuration = styled.div``;
export default GridLayout;
