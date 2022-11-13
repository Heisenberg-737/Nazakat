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
      <h1>Why is women health essential?</h1>
      <BodyCard
        img="https://images.prismic.io/medtruth/761d1659-8d87-4bec-8570-48dd79f7f5c7_MedTruth+Womens+Health+Coverage+Area.png?auto=compress,format"
        para="Nowadays women are at par with men in all spheres of life, they are working as
        successful doctors, engineers, professionals, entrepreneurs etc. Women do not feel free
        to talk about their health. In some cases it becomes life-threatening. Talking about
        women related health issues is still a big taboo in most parts of India."
        id={1}
      />
      <BodyCard
        img="https://image.freepik.com/free-vector/girls-is-engaged-gym-vector-illustration_65141-232.jpg"
        heading="Stay Healthy"
        para="Nazakat is the one-stop destination for staying healthy."
        id={2}
      />
      <BodyCard
        img="https://image.freepik.com/free-vector/girls-is-engaged-gym-vector-illustration_65141-232.jpg"
        para="Have one on one interactions with trained medical professionals and doctors."
        id={3}
      />
       <BodyCard
        img="https://image.freepik.com/free-vector/girls-is-engaged-gym-vector-illustration_65141-232.jpg"
        para="Easily calculate your BMI and chat with our experts."
        id={4}
      />

    </Container>
  );
}

export default HomePageBody;
