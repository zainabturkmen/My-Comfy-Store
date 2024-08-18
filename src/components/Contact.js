import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="contact">
        <article>
          <h1>join our newsletter and get 20% off</h1>
          <p>
            Sign up for our newsletter and instantly receive a 20% discount on
            your next order. Stay updated with the latest news, exclusive
            offers, and special promotions delivered straight to your inbox.
            Don’t miss out—join our community today and start saving
          </p>
        </article>
        <form
          className="email-container"
          action="https://formspree.io/f/xjkbolaz"
          method="POST">
          <input type="email" placeholder="Enter Email" name="_replyto" />
          <button type="submit" className="subscribe">
            Subscribe
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 4em;
    max-width: 800px;
    margin: 0 auto;
    padding: 5em;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 1em;
    h1 {
      font-size: 35px;
    }
    p {
      font-size: 18px;
      line-height: 1.6em;
      font-weight: 300;
    }
  }

  .email-container {
    display: flex;
    input {
      width: 470px;
      height: 45px;
      padding-left: 1.5em;
      background-color: #f5ebe3;
      border: none;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;

      &::placeholder {
        color: #000;
        font-size: 1.1em;
        font-weight: 100;
        letter-spacing: 0.1em;
      }
    }
    .subscribe {
      color: white;
      background-color: #a6602d;
      padding: 0.4em 1em;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      transition: all 0.3s linear;
      border: none;
      height: 45px;
      width: 120px;
      font-size: 1.2em;
      letter-spacing: 0.1em;
      cursor: pointer;
      &:hover {
        color: hsl(22, 28%, 21%);
        background: #e3c5ae;
      }
    }
  }

  @media (max-width: 700px) {
    .contact {
      align-items: center;
      text-align: center;
      max-width: 400;
    }

    .email-container {
      flex-direction: column;
      input {
        width: 300px;
        text-align: center;
        padding-left: 0;
      }
      .subscribe {
        width: 300px;
        border-radius: none;
      }
    }
  }
`;

export default Contact;
