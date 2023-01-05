import styled from 'styled-components';

const Button = () => {
  return <DefaultButton type="submit">button</DefaultButton>;
};

export default Button;

const DefaultButton = styled.button`
  background-color: var(--main-color);
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  color: white;

  :hover {
    background-color: var(--hover-color);
    transition: all ease-in 0.1s;
    cursor: pointer;
  }
`;
