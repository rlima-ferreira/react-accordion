import styled from 'styled-components';

export const List = styled.div<{ color?: string; borderColor?: string }>`
  padding: 20px;

  details {
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid ${({ borderColor }) => borderColor || '#bbb'};
    box-sizing: border-box;
    overflow: hidden;

    &:first-of-type {
      border-top: 2px solid ${({ borderColor }) => borderColor || '#bbb'};
    }

    &[open] {
      summary > span:last-of-type {
        transform: rotate(90deg);
        transition: transform 0.3s linear;
      }

      > div {
        height: 300px;
      }
    }

    > summary {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      outline: none;
      padding: 15px 10px;
      box-sizing: border-box;
      font-weight: 700;
      font-size: 1.1em;
      color: ${({ color }) => color || '#222'};

      > span:last-of-type {
        transform: rotate(0);
        transition: transform 0.3s ease-in-out;
      }
    }

    > div {
      margin: 0;
      padding: 0 10px;
      background-color: #f2f2f2;
      overflow-y: auto;
      height: 0;
      transition: height 1s linear;
    }
  }
`;
