import logo from "./logo.svg";
import "./App.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FilterSideBar from "./components/FilterSideBar";
import DashboardCharts from "./components/DashboardCharts";
import { useState } from "react";

function App() {
  const [productList, setProductList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  return (
    <div className="App">
      <Container className="main-container">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <FilterSideBar
              updateProducts={(products) => setProductList(products)}
              updateCategories={(categories) => setCategoryList(categories)}
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
