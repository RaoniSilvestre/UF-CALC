import { styled } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  background-color: #164194;
  
`;

export const Content = styled.div`
  width: 100%;
  max-width: 576px;
  background: white;
  height: 100%;
  max-height: 400px;
  position: relative;
  border-radius: 0.25rem;
  padding: 3rem;
  text-align: center;
  margin: 1rem;

  hr {
    margin-top: 2rem;
    background-color: black;
  }
`;