import "./App.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FilterSideBar from "./components/FilterSideBar.tsx";
import DashboardCharts from "./components/DashboardCharts.tsx";
import { useState } from "react";
import React from "react";
import { Product } from "./common/Interfaces";


function App() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [categoryList, setCategoryList] = useState<[]>([]);

  return (
    <div className="App">
      <Container className="main-container">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <FilterSideBar
              updateProducts={(products: any) => setProductList(products)}
              updateCategories={(categories: any) => setCategoryList(categories)}
            />
          </Grid>
          <Grid item xs={9}>
            <DashboardCharts products={productList} categories={categoryList} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
