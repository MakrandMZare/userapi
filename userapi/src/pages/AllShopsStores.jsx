import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Shope from "../components/Shope";
import { mobile } from "../responsive";

const Container = styled.div`
  justify-content: space-between;
`;
const Title = styled.h1`
  margin: 20px;
`;

const Wrapper = styled.div``;

const FilterContainer = styled.div`
  flex: 1;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 0px 20px;
  ${mobile({ margin: "10px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option`
  font-size: 14px;
  font-weight: 400;
`;
const AllShopsStores = () => {
  return (
    <Container>
      <Navbar />
      <Title>Our Shops</Title>
      <Wrapper>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Product By</FilterText>
            <Select>
              <Option disabled selected>
                Rate
              </Option>
              <Option>₹.250.00</Option>
              <Option>₹.500.00</Option>
              <Option>₹.750.00</Option>
              <Option>₹.1000.00</Option>
              <Option>₹.2000.00+</Option>
              <Option>Coustomised</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Filter Product By</FilterText>
            <Select>
              <Option disabled selected>
                Rate
              </Option>
              <Option>₹.250.00</Option>
              <Option>₹.500.00</Option>
              <Option>₹.750.00</Option>
              <Option>₹.1000.00</Option>
              <Option>₹.2000.00+</Option>
              <Option>Coustomised</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Shope />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default AllShopsStores;
