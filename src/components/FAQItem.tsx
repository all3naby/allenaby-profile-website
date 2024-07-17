import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled.div`
  background: #171717;
  color: white;
  border-radius: 10px;
  margin: 20px 0;
  padding: 10px;
  cursor: pointer;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2em;
`;

const Answer = styled(motion.div)`
  padding-top: 10px;
  font-size: 1em;
  color: #a9a9a9;
`;

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <Question>{question}</Question>
      <AnimatePresence>
        {isOpen && (
          <Answer
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {answer}
          </Answer>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default FAQItem;
