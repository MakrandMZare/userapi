import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  min-width: 20vw;
  height: 30vh;
  background-color: lightgrey;
  justify-content: space-between;
  box-shadow: 0 2px 10px $clr:grey;
  align-items: center;
  position: relative;
  border-radius: 25px;
  cursor: pointer;
  transition: background 200ms ease-in, color 200ms ease-in;
  ${mobile({ height: "30vh" })};

  &:hover{
    tansform: scale(1.02);
  };
  &:hover{
    background: white;
    color: white;
  };
  `;

const Image = styled.img`
  width: 100%;
  height: 70%;
  align-items: center;
  object-fit: cover;
  ${mobile({ height: "40vh" })};
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  color: black;
  ${mobile({ color: "white", padding: "0px 20px" })};
`;

const Title = styled.h1`
  padding: 20px 20px 0px 20px;
  font-weight: 600;
  font-size: 24px;
  ${mobile({ fontSize: "14px", padding: "0px 10px" })};
`;

const Area = styled.p`
  padding: 0px 20px;
  font-weight: 500;
  font-size: 14px;
  ${mobile({ fontSize: "12px", padding: "0px 10px" })};
`;
const Button = styled.button`
    font-family: inherit;
    font-weight: bold;
    font-size: 14px;
    margin: 10px;
    border: 2px solid color: black;
    background: transparent;
    color: black;
    border-radius: 25px;
    transition: background 200ms ease-in, 200ms ease-in;

    &:hover{
    background: black;
    color: white;
}
`;

const ShopCards = ({ item }) => {
  return (
    <Container>
      <Link to={`/AllShopsStores/${item.title}`}>
        <Image src={item.img} />
        <Info>
          <Title> {item.title}</Title>
          <Area> {item.area}</Area>
          <Button>Shop Now</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default ShopCards;
