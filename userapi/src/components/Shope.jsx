import styled from "styled-components";
import { allshops } from "../data";
import ShopCards from "./ShopCards";
import { mobile } from "../responsive";

const Container = styled.div`
padding: 10px;
margin: 3px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
  ${mobile({ padding: "5px", flexDirection: "column" })};
`;

const Shope = () => {
  return (
    <Container>
      {allshops.map((item) => (
        <ShopCards item={item} />
      ))}
    </Container>
  );
};

export default Shope;
