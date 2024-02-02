import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ increase, decrease, amount, stock }) => {
  return (
    <Wrapper className="amount-btns ">
      <button
        className={
          amount === 1 ? "amount-btn addon not-active" : "amount-btn addon"
        }
        onClick={decrease}
      >
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button
        className={
          amount === stock ? "amount-btn addon not-active" : "amount-btn addon"
        }
        onClick={increase}
      >
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  .addon {
    border: 1px solid gray;
    border-radius: 40%;
    background-color: lightgray;
  }
  .not-active {
    opacity: 0.2;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`;

export default AmountButtons;
