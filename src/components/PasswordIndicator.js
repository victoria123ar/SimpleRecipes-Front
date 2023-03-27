import React from "react";
import styled from "styled-components";

export default function PasswordStrengthMeter({ password }) {
  const calculateStrength = () => {
    let score = 0;

    if (password.length > 6) {
      score++;
    }

    if (/[a-z]/.test(password)) {
      score++;
    }

    if (/[A-Z]/.test(password)) {
      score++;
    }

    if (/[0-9]/.test(password)) {
      score++;
    }

    if (/[^a-zA-Z0-9]/.test(password)) {
      score++;
    }

    return score;
  };

  const getColor = (strength) => {
    switch (strength) {
      case 1:
        return "#e74c3c";
      case 2:
        return "#e67e22";
      case 3:
        return "#f1c40f";
      case 4:
        return "#a0d911";
      case 5:
        return "#2ecc71";
      default:
        return "#eee";
    }
  };

  const strength = calculateStrength();
  const color = getColor(strength);

  return (
    <Container>
      {password && (
        <BarContainer>
          <Bar
            color={color}
            style={{ width: `${(strength / 5) * 100}%` }}
          ></Bar>
        </BarContainer>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: -10px;
  margin-bottom: 10px;
  @media (max-width: 1315px) {
    width: 80%;
  }
`;

const BarContainer = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #eee;
`;

const Bar = styled.div`
  height: 100%;
  background-color: ${(props) => props.color};
  transition: width 0.2s ease;
`;
