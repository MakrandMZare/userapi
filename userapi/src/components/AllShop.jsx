import styled from "styled-components";
import { shops } from "../data";
import AllShopsCards from "./AllShopsCards";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "5px", flexDirection: "column" })};
`;

const AllShop = () => {
  return (
    <Container>
      {shops.map((item) => (
        <AllShopsCards item={item} />
      ))}
    </Container>
  );
};

export default AllShop;
