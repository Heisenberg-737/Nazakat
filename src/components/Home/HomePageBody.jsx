import React from "react";
import BodyCard from "./BodyCard";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #f9f9f9;
  h1 {
    font-size: 150%;
    font-weight: bold;
  }

  // media quries
  @media (max-width: 768px) {
    width: 100%;
    h1 {
      font-size: 100%;
    }
  }
`;

function HomePageBody() {
  return (
    <Container>
      <h1>Why Women health is essential?</h1>
      <BodyCard
        img="https://images.prismic.io/medtruth/761d1659-8d87-4bec-8570-48dd79f7f5c7_MedTruth+Womens+Health+Coverage+Area.png?auto=compress,format"
        para="Women experience unique health care challenges and are more likely to be diagnosed with certain diseases than men."
        id={1}
      />
      <BodyCard
        img="https://image.freepik.com/free-vector/girls-is-engaged-gym-vector-illustration_65141-232.jpg"
        heading="Stay Healthy"
        para="Useing this web application women can easily keep tack of their health."
        id={2}
      />
    </Container>
  );
}

export default HomePageBody;
