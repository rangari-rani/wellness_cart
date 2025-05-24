import React, { useState, useEffect, ChangeEvent } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import agent from "../../app/api/agent";
import Spinner from "../../app/layout/Spinner";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Pagination,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Brand } from "../../app/models/brand";
import { Type } from "../../app/models/type";

const sortOptions = [
  { value: "asc", label: "Ascending" },
  { value: "desc", label: "Descending" },
];

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [types, setTypes] = useState<Type[]>([]);
  const [selectedSort, setSelectedSort] = useState("asc");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedBrandId, setSelectedBrandId] = useState(0);
  const [selectedTypeId, setSelectedTypeId] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    Promise.all([agent.Store.brands(), agent.Store.types()])
      .then(([brandsResp, typesResp]) => {
        setBrands(brandsResp.filter((b) => b.name !== "All"));
        setTypes(typesResp.filter((t) => t.name !== "All"));
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    loadProducts(selectedSort, searchTerm);
  }, [currentPage, selectedBrandId, selectedTypeId, selectedSort, searchTerm]);

  const loadProducts = (sort: string, keyword = "") => {
    setLoading(true);
    if (keyword.trim()) {
      agent.Store.search(keyword)
        .then((res) => {
          setProducts(res.content);
          setTotalItems(res.totalElements ?? res.length ?? 0);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    } else {
      agent.Store
        .list(currentPage, pageSize, selectedBrandId, selectedTypeId, "name", sort)
        .then((res) => {
          setProducts(res.content);
          setTotalItems(res.totalElements);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  };

  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedSort(event.target.value);
    setCurrentPage(1);
  };

  const handleBrandChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.value;
    setSelectedBrand(selected);
    const brand = brands.find((b) => b.name === selected);
    setSelectedBrandId(brand ? brand.id : 0);
    setCurrentPage(1);
  };

  const handleTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.value;
    setSelectedType(selected);
    const type = types.find((t) => t.name === selected);
    setSelectedTypeId(type ? type.id : 0);
    setCurrentPage(1);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const handleSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setCurrentPage(1);
    }
  };

  if (loading) return <Spinner message="Loading Products..." />;
  if (!products) return <h3>Unable to load Products</h3>;

  return (
    <Box maxWidth="lg" mx="auto" px={2}>
      <Grid container spacing={2} alignItems="flex-start">
        {/* Sidebar Filters */}
        <Grid item xs={12} md={3} lg={2.5}>
          <Paper sx={{ mb: 2, p: 2 }}>
            <TextField
              label="Search products"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearchKeyDown}
            />
          </Paper>

          <Paper sx={{ mb: 2, p: 2 }}>
            <FormControl>
              <FormLabel id="sort-by-name-label">Sort by Name</FormLabel>
              <RadioGroup
                aria-label="sort-by-name"
                name="sort-by-name"
                value={selectedSort}
                onChange={handleSortChange}
              >
                {sortOptions.map(({ value, label }) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio />}
                    label={label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Paper>

          <Paper
            sx={{
              mb: 2,
              p: 2,
              maxHeight: isMobile ? "unset" : 400,
              overflowY: isMobile ? "unset" : "auto",
            }}
          >
            <FormControl>
              <FormLabel id="brands-label">Brands</FormLabel>
              <RadioGroup
                aria-label="brands"
                name="brands"
                value={selectedBrand}
                onChange={handleBrandChange}
              >
                <FormControlLabel
                  key="all"
                  value="All"
                  control={<Radio />}
                  label="All"
                />
                {brands.map((brand) => (
                  <FormControlLabel
                    key={brand.id}
                    value={brand.name}
                    control={<Radio />}
                    label={brand.name}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Paper>

          <Paper
            sx={{
              mb: 2,
              p: 2,
              maxHeight: isMobile ? "unset" : 400,
              overflowY: isMobile ? "unset" : "auto",
            }}
          >
            <FormControl>
              <FormLabel id="types-label">Types</FormLabel>
              <RadioGroup
                aria-label="types"
                name="types"
                value={selectedType}
                onChange={handleTypeChange}
              >
                <FormControlLabel
                  key="all"
                  value="All"
                  control={<Radio />}
                  label="All"
                />
                {types.map((type) => (
                  <FormControlLabel
                    key={type.id}
                    value={type.name}
                    control={<Radio />}
                    label={type.name}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>

        {/* Product List */}
        <Grid item xs={12} md={9} lg={9.5}>
          <Box px={isMobile ? 0 : 2}>
            <ProductList products={products} />

            <Box mt={4} display="flex" justifyContent="center">
              <Pagination
                count={Math.ceil(totalItems / pageSize)}
                color="primary"
                onChange={handlePageChange}
                page={currentPage}
              />
            </Box>

            <Box mt={2} textAlign="center">
              <Typography variant="subtitle1" noWrap>
                Displaying {(currentPage - 1) * pageSize + 1}-
                {Math.min(currentPage * pageSize, totalItems)} of {totalItems} items
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
