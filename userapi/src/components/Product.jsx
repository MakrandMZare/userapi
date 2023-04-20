import { mobile } from "../responsive";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";


const Container = styled.div`
    flex; 1;
    margin: 5px;
    min-width: 20vw;
    height: 28vh;
    background-color: lightgrey;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-radius: 25px;
    transition: all 0.5s ease;
    cursor: pointer;
    ${mobile({ width: "100%" })}

    &:hover {
      background: white;
      color: white;
    }
`;

const Image = styled.img`
  width: 100%;
  height: 65%;
  object-fit: cover;

  &:hover {
    background: white;
    color: white;
  }
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 35%;
  color: black;
  transition: all 0.5s ease;
`;

const Title = styled.h1`
  padding-left: 10px;
  font-size: 24px;
  font-weight: 600;
  ${mobile({ padding: "0px 20px" })}
`;

const Category = styled.div``;

const Desc = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding: 0 15px;
  ${mobile({ padding: "0px 20px" })}
`;

const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  background: transparent;
  color: black;
  margin: -250px 0 -250px 285px;
  border-radius: 25px;
  transition: background 200ms ease-in, color 200ms ease-in;

  &:hover {
    background: white;
    color: white;
  }
  ${mobile({ margin: "-250px 0 -150px 250px" })}
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 0 15px;
  ${mobile({ padding: "0px 20px" })}
`;

const Product = ({item}) => {
  

  return (
    <Container>
      <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Category>{item.cat}</Category>
          <Button>Shop Now</Button>
          <Desc>{item.desc}</Desc>
          <Price>{item.price}</Price>
        </Info>
    </Container>
  );
};

export default Product;
