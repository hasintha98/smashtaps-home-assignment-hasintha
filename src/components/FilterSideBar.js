import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { CategoryService } from "../services/service";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import LoadingButton from "@mui/lab/LoadingButton";

function FilterSideBar({ updateProducts, updateCategories }) {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    setBtnDisabled(false);
  }, [selectedProduct]);

  useEffect(() => {
    if (selectedCategory) getAllProducts();
    setSelectedProduct([]);
    setBtnDisabled(false);
  }, [selectedCategory]);

  const getAllCategories = () => {
    CategoryService.getCategories()
      .then((res) => {
        updateCategories(res);
        setCategories(res);
      })
      .catch((e) => console.error(e));
  };

  const getAllProducts = () => {
    CategoryService.getProducts(selectedCategory)
      .then((res) => {
        console.log({ res });

        setProducts(res.products);
      })
      .catch((e) => console.error(e));
  };

  const clear = () => {
    setSelectedCategory(0);
    setSelectedProduct([]);
    updateProducts([]);
  };

  const runReport = async () => {
    setLoading(true);
    setTimeout(() => {
      if (selectedProduct.length > 0)
        updateProducts(
          products.filter((product) => selectedProduct.includes(product.title))
        );
      else updateProducts(products);
      setBtnDisabled(true);
      setLoading(false);
    }, 3000);
  };


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedProduct(
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <Box component="section" sx={{ p: 2, border: "1px solid black" }}>
        <div className="sidebar-header-section">
          <span className="filter-heading">Filters</span>
          <span onClick={clear} className="clear-btn">Clear</span>
        </div>

        <Select
          value={selectedCategory}
          className="select-category-field"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <MenuItem value={0}>
            <em>Selected Category</em>
          </MenuItem>
          {categories?.map((category, key) => (
            <MenuItem key={key} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
        <Select
          multiple
          disabled={!selectedCategory}
          value={selectedProduct}
          onChange={handleChange}
          input={<OutlinedInput />}
          displayEmpty
          className="select-product-field"
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Selected Product</em>;
            }

            return selected.join(", ");
          }}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            Selected Product
          </MenuItem>
          {products?.map((product, key) => (
            <MenuItem key={key} value={product?.title}>
              {product?.title}
            </MenuItem>
          ))}
        </Select>

        <LoadingButton
          style={{ marginTop: "200px" }}
          disabled={!selectedCategory || btnDisabled}
          variant="contained"
          loading={loading}
          onClick={runReport}
        >
          Run Report
        </LoadingButton>
      </Box>
    </div>
  );
}

export default FilterSideBar;
