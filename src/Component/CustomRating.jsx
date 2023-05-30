import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const CustomRating = ({ canSpin }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <RatingWrapper>
      {[...Array(5)].map((n, i) => {
        const ratingValue = i + 1;
        return (
          <span key={i}>
            <FontAwesomeIcon
              icon={faStar}
              color={ratingValue <= (hover || rating) ? "#ffa500" : "#ccc"}
              spin={canSpin ? true : false}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setRating(ratingValue)}
            />
          </span>
        );
      })}
    </RatingWrapper>
  );
};

const RatingWrapper = styled.aside`
  width: max-content;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    & :nth-child(-n + 4) {
      margin-right: 0.2rem;
      width: max-content;
      text-align: center;
    }
  }

  .radio_input {
    display: none;
  }
`;
export default CustomRating;
