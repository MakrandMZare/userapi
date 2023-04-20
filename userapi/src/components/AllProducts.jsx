import styled from "styled-components";
import { allproduct } from "../data";
import { mobile } from "../responsive";
import AllProduct from "./AllProduct";

const Container = styled.div`
      padding: 10px;
      margin: 3px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      ${mobile({ marginTop: "10px", alignContent: "center" })}
`;

const AllProducts = () => {
  return (
    <Container>
      {allproduct.map((item) => (
        <AllProduct item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default AllProducts;
