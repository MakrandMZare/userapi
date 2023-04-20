import { mobile } from "../responsive";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    flex; 1;
    margin: 5px;
    min-width: 20vw;
    height: 28vh;
    background-color: black;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-radius: 25px;
    transition: all 0.5s ease;
    cursor: pointer;
    ${mobile({ width: "100%" })}
`;

const Image = styled.img`
  width: 100%;
  height: 65%;
  object-fit: cover;

  &:hover {
    background: grey;
    color: white;
  }
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 35%;
  color: white;
  transition: all 0.5s ease;
`;

const Title = styled.h1`
  padding: 10px 20px 0px 15px;
  font-size: 18px;
  font-weight: 400;
  ${mobile({ padding: "0px 20px" })}
`;

const Desc = styled.div`
  font-weight: 300;
  font-size: 14px;
  padding: 0 15px;
  ${mobile({ padding: "0px 20px" })}
`;

const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  background: transparent;
  color: white;
  margin: -250px 0 -250px 285px;
  border-radius: 25px;
  transition: background 200ms ease-in, color 200ms ease-in;

  &:hover {
    background: grey;
    color: white;
  }
  ${mobile({ margin: "-250px 0 -150px 250px" })}
`;

const Cost = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding: 0 15px;
  ${mobile({ padding: "0px 20px" })}
`;

const AllProduct = ({ item }) => {
  return (
    <Container>
      <Link to={`/productlist/${item.category}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.name}</Title>
          <Button>Shop Now</Button>
          <Desc>{item.desc}</Desc>
          <Cost>{item.cost}</Cost>
        </Info>
      </Link>
    </Container>
  );
};

export default AllProduct;
