import {
    Divider,
    Grid,
    Table,
    Button,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
    Typography,
    useTheme,
    useMediaQuery,
    CircularProgress,
    Box,
  } from "@mui/material";
  
  
  import { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  import { Product } from "../../app/models/product";
  import agent from "../../app/api/agent";
  import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import React from "react";
  
  export default function ProductDetails() {
    const { basket } = useAppSelector((state) => state.basket);
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const item = basket?.items.find((i) => i.id === product?.id);
  
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  
    const extractImageName = (item: Product): string | null => {
      if (item && item.pictureUrl) {
        const parts = item.pictureUrl.split("/");
        if (parts.length > 0) {
          return parts[parts.length - 1];
        }
      }
      return null;
    };
  
    const formatPrice = (price: number): string => {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
      }).format(price);
    };
  
    useEffect(() => {
      if (item) setQuantity(item.quantity);
      id &&
        agent.Store.details(parseInt(id))
          .then((response) => setProduct(response))
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
    }, [id, item]);
  
    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(event.target.value);
      if (!isNaN(value) && value > 0) {
        setQuantity(value);
      }
    };
  
    const updateQuantity = async () => {
      try {
        setSubmitting(true);
        const newItem = {
          ...product!,
          quantity: quantity,
        };
        if (item) {
          const quantityDifference = quantity - item.quantity;
          if (quantityDifference > 0) {
            await agent.Basket.incrementItemQuantity(
              item.id,
              quantityDifference,
              dispatch
            );
          } else if (quantityDifference < 0) {
            await agent.Basket.decrementItemQuantity(
              item.id,
              Math.abs(quantityDifference),
              dispatch
            );
          }
        } else {
          await agent.Basket.addItem(newItem, dispatch);
        }
      } catch (error) {
        console.error("Failed to update quantity:", error);
      } finally {
        setSubmitting(false);
      }
    };
  
    if (loading)
      return (
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            mt: 4,
          }}
        >
          <CircularProgress />
        </Box>
      );
  
    if (!product)
      return (
        <Typography variant="h5" color="error" sx={{ mt: 4, textAlign: "center" }}>
          Product not found
        </Typography>
      );
  
    return (
      <Grid
        container
        spacing={4}
        direction={isSmDown ? "column" : "row"}
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            src={"/images/products/" + extractImageName(product)}
            alt={product.name}
            sx={{
              width: "100%",
              height: isSmDown ? 250 : 400,
              objectFit: "contain",
              borderRadius: 1,
              bgcolor: "#f9f9f9",
            }}
          />
        </Grid>
  
        <Grid item xs={12} sm={6}>
          <Typography variant={isSmDown ? "h4" : "h3"} gutterBottom>
            {product.name}
          </Typography>
  
          <Divider sx={{ mb: 2 }} />
  
          <Typography
            gutterBottom
            color="secondary"
            variant={isSmDown ? "h5" : "h4"}
            sx={{ fontWeight: "bold" }}
          >
            {formatPrice(product.price)}
          </Typography>
  
          <TableContainer sx={{ mb: 3 }}>
            <Table size={isSmDown ? "small" : "medium"}>
              <TableBody>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>{product.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>{product.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell>{product.productType}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brand</TableCell>
                  <TableCell>{product.productBrand}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
  
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={inputChange}
                variant="outlined"
                type="number"
                label="Quantity in Cart"
                fullWidth
                value={quantity}
                inputProps={{ min: 1 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                sx={{ height: "55px" }}
                color="success"
                size="large"
                variant="contained"
                fullWidth
                onClick={updateQuantity}
                disabled={submitting || quantity < 1}
              >
                {submitting ? "Processing..." : item ? "Update Quantity" : "Add to Cart"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  