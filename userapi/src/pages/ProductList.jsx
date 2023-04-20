import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { product } from "../data";

const Container = styled.div`
  
`;

const Wrapper = styled.div`
  margin: 5px;
  justify-content: space-between;
  ${mobile({ alignContent: "Center" })}
`;

const Title = styled.h1`
  flex: 1;
  margin: 20px 20px;
  justify-content: space-between;
`;

const FilterCategory = styled.div`
  
`;
const FilterCategoryOption = styled.option`
  flex: 1;
  margin: 0px 20px;
  justify-content: space-between;
`;

const FilterProductsContainer = styled.div`
  display: flex;
  justify-content: column;
`;

const SortProductsContainer = styled.div`
  display: flex;
  justify-content: column;
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

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [sort, setSort] = useState("newest");
  const [filters, setFilters] = useState({});

  const handleFilters = (e) =>{
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }
  
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>{cat}</Title>
        <FilterProductsContainer>
          <Filter>
            <FilterText>Filter Product By</FilterText>
            <Select name="cat" onChange={handleFilters}>
              <Option disabled>Category</Option>
              <Option>Cakes</Option>
              <Option>Flower Buke</Option>
              <Option>Books</Option>
              <Option>Hampers</Option>
            </Select>
            </Filter>
            <Filter>
            <FilterCategory>
              {product.cat?.map((c) =>(
                <FilterCategoryOption key={c}>{c}</FilterCategoryOption>
              ))}
            </FilterCategory>
          </Filter>
          </FilterProductsContainer>
          <SortProductsContainer>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
          </SortProductsContainer>
          <Products cat={cat} filters={filters} sort={sort} />
      </Wrapper>
      
      <Footer />
    </Container>
  );
};

export default ProductList;
