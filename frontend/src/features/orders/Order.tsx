import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Box,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import agent from "../../app/api/agent";
  import Spinner from "../../app/layout/Spinner";
  import type { Order as OrderType } from "../../app/models/order";
import React from "react";
  
  export default function Order() {
    const [orders, setOrders] = useState<OrderType[] | null>(null);
    const [loading, setLoading] = useState(true);
  
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
    useEffect(() => {
      agent.Orders.list()
        .then((orders) => setOrders(orders))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, []);
  
    if (loading) return <Spinner message="Loading orders..." />;
  
    const formatDate = (orderDateArray: any) => {
      if (!Array.isArray(orderDateArray) || orderDateArray.length < 3) {
        return "Invalid Date";
      }
  
      const [year, month, day] = orderDateArray;
      return `${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}-${year}`;
    };
  
    return (
      <Box sx={{ overflowX: 'auto' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="orders table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="right">Total</TableCell>
                {!isMobile && (
                  <>
                    <TableCell align="right">Order Date</TableCell>
                    <TableCell align="right">Order Status</TableCell>
                  </>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders?.map((order) => (
                <TableRow key={order.id}>
                  <TableCell component="th" scope="row">{order.id}</TableCell>
                  <TableCell align="right">{order.total}</TableCell>
                  {!isMobile && (
                    <>
                      <TableCell align="right">{formatDate(order.orderDate)}</TableCell>
                      <TableCell align="right">{order.orderStatus}</TableCell>
                    </>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  
        {/* Optional: Condensed mobile view below the table */}
        {isMobile && (
          <Box mt={2}>
            {orders?.map(order => (
              <Paper key={order.id} sx={{ p: 2, mb: 2 }}>
                <Typography variant="subtitle1">Order #{order.id}</Typography>
                <Typography variant="body2">Total: ₹{order.total}</Typography>
                <Typography variant="body2">Date: {formatDate(order.orderDate)}</Typography>
                <Typography variant="body2">Status: {order.orderStatus}</Typography>
              </Paper>
            ))}
          </Box>
        )}
      </Box>
    );
  }
  