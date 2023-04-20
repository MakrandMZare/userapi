import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  background-color: lightgrey;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 25px;
  ${mobile({ height: "50vh" })};
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
  align-items: center;
  object-fit: cover;
  ${mobile({ height: "40vh" })};
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  color: #f1db3f;
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
    border: 2px solid color: #f1db3f;
    background: transparent;
    color: white;
    border-radius: 25px;
    transition: background 200ms ease-in, 200ms ease-in;

    &:hover{
    background: #f1db3f;
    color: Black;
}
`;

const AllShopsCards = ({ item }) => {
  return (
    <Container>
      <Link to={`/shops/${item.title}`}>
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

export default AllShopsCards;
