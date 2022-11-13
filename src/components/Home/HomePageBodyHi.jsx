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
      <h1>
महिला स्वास्थ्य क्यों आवश्यक है?</h1>
      <BodyCard
        img="https://images.prismic.io/medtruth/761d1659-8d87-4bec-8570-48dd79f7f5c7_MedTruth+Womens+Health+Coverage+Area.png?auto=compress,format"
        para="महिलाएं अद्वितीय स्वास्थ्य देखभाल चुनौतियों का अनुभव करती हैं और पुरुषों की तुलना में कुछ बीमारियों का निदान होने की अधिक संभावना है।"
        id={1}
      />
      <BodyCard
        img="https://image.freepik.com/free-vector/girls-is-engaged-gym-vector-illustration_65141-232.jpg"
        heading="स्वस्थ रहें"
        para="इस वेब एप्लिकेशन का उपयोग करके महिलाएं आसानी से अपने स्वास्थ्य का सामना कर सकती हैं।"
        id={2}
      />
    </Container>
  );
}

export default HomePageBody;
