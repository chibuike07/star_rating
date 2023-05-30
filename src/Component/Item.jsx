import React from "react";
import { items } from "../Util/data";
import { styled } from "styled-components";
import CustomRating from "./CustomRating";

const Item = () => {
  const menu =
    items.length > 0 ? (
      items.map(({ id, price, pre, desc, img, name, type }, idx) => {
        return (
          <Card key={id || idx}>
            <figure className="card_top_view">
              <img src={img} alt="food" />
              <aside className="rating">
                <CustomRating />
                <small>{type}</small>
              </aside>
            </figure>

            <CardBody>
              <div className="highlights">
                <strong>{name}</strong>
                <small>
                  {pre}
                  {price}
                </small>
              </div>

              <div>
                <p>{desc}</p>
              </div>
            </CardBody>
          </Card>
        );
      })
    ) : (
      <div>No item found</div>
    );
  return <Container>{menu}</Container>;
};

const Container = styled.div`
  width: 80%;
  height: 80vh;
  min-width: 300px;
  display: flex;
  gap: 30px;
`;

const Card = styled.div`
  background-color: #fff;
  width: 35%;
  box-shadow: 0px 0px 5px #ffa500;
  border-radius: 20px;
  overflow: hidden;
  .card_top_view {
    flex: 1;
    height: 15em;
    img {
      width: 100%;
      height: 80%;
    }

    .rating {
      transform: translate(3%, 50%);
      display: flex;

      small {
        margin-left: 1rem;
        width: 50px;
        height: 1.3rem;
        text-transform: capitalize;
        background-color: #ffa500;
        text-align: center;
        border-radius: 10px;
        color: #fff;
        filter: drop-shadow(0px 0px 5px #ccc);
      }
    }
  }
`;
const CardBody = styled.div`
  padding: 1rem;
  .highlights {
    color: #ffa500;
    strong {
      text-transform: capitalize;
      margin-right: 0.5rem;
    }

    small {
      font-size: 2rem;
    }
  }
`;
export default Item;
