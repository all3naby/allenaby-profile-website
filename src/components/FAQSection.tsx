import styled from "styled-components";
import FAQItem from "./FAQItem";

const Container = styled.div`
  background: #0b0b0b;
  color: white;
  padding: 50px;
  border-radius: 15px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const FAQ = () => {
  const faqData = [
    {
      question: "How many builds can I request each month?",
      answer: "You can request as many builds as your plan allows...",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time without any penalties...",
    },
    {
      question: "How secure are your solutions?",
      answer:
        "Security is paramount. We adhere to best practices and industry standards...",
    },
    {
      question: "Can your solutions scale with my business growth?",
      answer:
        "Definitely. Both our solutions and our subscriptions are designed to handle...",
    },
  ];

  return (
    <Container>
      <Title>FAQ</Title>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </Container>
  );
};

export default FAQ;
