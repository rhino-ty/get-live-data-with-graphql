import styled from "styled-components";

const StyledLoading = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #ededed;
  }

  .loader {
    max-width: 15rem;
    width: 100%;
    height: auto;
    stroke-linecap: round;
  }

  circle {
    fill: none;
    stroke-width: 3.5;
    animation-name: preloader;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    transform-origin: 170px 170px;
    will-change: transform;

    &:nth-of-type(1) {
      stroke-dasharray: 550px;
      animation-delay: 0.15s;
    }

    &:nth-of-type(2) {
      stroke-dasharray: 500px;
      animation-delay: 0.3s;
    }

    &:nth-of-type(3) {
      stroke-dasharray: 450px;
      animation-delay: 0.45s;
    }

    &:nth-of-type(4) {
      stroke-dasharray: 300px;
      animation-delay: 1s;
    }

    /* @for $i from 1 through 4 {
      &:nth-of-type(#{$i}) {
        animation-delay: -#{$i * 0.15}s;
      }
    } */
  }

  @keyframes preloader {
    50% {
      transform: rotate(360deg);
    }
  }
`;

export const Loading = () => {
  return (
    <StyledLoading>
      <div className="container">
        <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
          <circle cx="170" cy="170" r="160" stroke="royalblue" />
          <circle cx="170" cy="170" r="135" stroke="#404041" />
          <circle cx="170" cy="170" r="110" stroke="royalblue" />
          <circle cx="170" cy="170" r="85" stroke="#404041" />
        </svg>
      </div>
    </StyledLoading>
  );
};
