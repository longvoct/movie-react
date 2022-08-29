import React from "react";
import styled from "styled-components";

const Checkbox = () => {
  return (
    <Wrapper>
      <Boxed className="w-8 h-8 bg-blue-700 relative rounded-lg">
        <div className="absolute border-[0_3px_3px_0] border-solid border-white w-2 h-4 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rotate-45"></div>
      </Boxed>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const Boxed = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  border-radius: 8px;
`;

export default Checkbox;
