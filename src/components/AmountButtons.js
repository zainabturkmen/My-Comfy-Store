import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";

const AmountButtons = ({ amount, increase, descrease }) => {
  return (
    <Wrapper>
      <button type="button" className="amount-btn" onClick={descrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
display: flex;
flex-direction: row;
gap: .5em;

.amount-btn{
  background-color: transparent;
  border: none;
}
`;

export default AmountButtons;
