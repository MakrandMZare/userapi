import styled from "styled-components";
import { product } from "../data";
import { mobile } from "../responsive";
import SelectedProduct from "./SelectedProduct";

const Container = styled.div`
  padding: 10px;
  margin: 3px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ marginTop: "80px" })}
`;

const Products = () => {
  return (
    <Container>
      {product.map((item) => (
        <SelectedProduct item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
