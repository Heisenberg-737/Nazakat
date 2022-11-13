import React from "react";
import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  height: 80vh;
 
  
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .left {
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: green;
    h1 {
      margin: 0;
    }
  }
 
  .right {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    a {
      text-decoration: none;
      color: darkgreen;
      background-color: white;
      width: 200px;
      height: 60px;
      border-radius: 40px;
      font-weight: bolder;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      box-shadow: 0 0 0 1px pink;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    .left {
      width: 100%;
      height: 50%;
      justify-content: flex-end;
      font-size: 1rem;
    }
    .right {
      width: 100%;
      height: 50%;
      align-items: center;
      justify-content: flex-start;
      padding: 3rem 0;
      font-size: 1rem;
      a {
        width: 150px;
        height: 45px;
        font-size: 1rem;
      }
    }
  }
`;

function HomePageHeader() {
  return (
    <Container>
      <img src="../../Assets/woman.png" alt="Girl in a jacket" width="100%" height="80 vh">

      <div className="left">
        <h1>Nazakat</h1>
        <small>An all-in-one women health platform.</small>
      </div>
      <div className="right">
        <a href="/">Know More</a>
      </div>
    </Container>
  );
}
export default HomePageHeader;
