import styled from "styled-components";


export const Container = styled.div`

 background: #eee;

`;

export const Main = styled.div`
 
  //min-height: 100vh;
  max-width: 90%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DIV = styled.div`
 width: 90%;
 margin-left:20px;
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  //max-width: 800px;

`;

export const Card = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #fff;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
  

  &:hover {
    color:blue;
    cursor:pointer;
    box-shadow: 5px 5px 5px 5px white;

  }
`;

export const Title = styled.h2`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;

`;

export const Description = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
  padding-left: 2rem;

`;









