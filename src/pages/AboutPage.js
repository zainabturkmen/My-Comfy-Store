import React from "react";
import styled from "styled-components";
import aboutImage from "../assets/aboutIamge.png";

const AboutPage = () => {
  return (
    <div>
      <Wrapper className="wrapper">
        <img src={aboutImage} alt="nice couch" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
       
        </article>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

export default AboutPage;





  //  <p>
  //    Comfy Sloth is your ultimate destination for creating cozy and stylish
  //    living spaces. We specialize in offering a curated selection of
  //    high-quality, comfortable furniture that blends seamlessly with any home
  //    décor. Our mission is to bring comfort and elegance to every room, making
  //    your home a place where you can truly relax and unwind.
  //  </p>;