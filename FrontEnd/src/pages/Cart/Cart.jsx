import {
  Box,
  Paper,
  Typography,
  IconButton,
  Badge,
  Divider,
  Button,
} from "@mui/material";
import "./Cart.css";
import React from "react";
import { Add, Delete, Remove } from "@mui/icons-material";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import {
  decreasNumberItems,
  deleteItem,
  increasNumberItems,
} from "../../Redux/counterSlice";

const Cart = () => {
  const { selectedPrpdect } = useSelector((state) => state.cartt); // acces to the data in store
  const dispatch = useDispatch(); //  access to the functions of redux

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 0,
      top: 0,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "15px 10px",
      fontSize: "15px",
      borderRadius: "50%",
    },
  }));

  let subTotal = 0; // Sub Totale

  return (
    <Box sx={{ width: { md: "50%", xs: "90%" } }}>
      {selectedPrpdect.map((e) => {
        subTotal += Number(e.price) * Number(e.quantity); // Sub Totale

        return (
          <Paper dir="rtl" className="item-container" key={e.id}>
            <div className="img-title-parent">
              <img src={e.imageLink[0]} alt="" />
              <p className="product-name">{e.productName}</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "27%",
              }}
            >
              <IconButton onClick={() => dispatch(increasNumberItems(e))}>
                <Add />
              </IconButton>

              <StyledBadge badgeContent={e.quantity} color="secondary" />

              <IconButton onClick={() => dispatch(decreasNumberItems(e))}>
                <Remove />
              </IconButton>
            </div>

            {/* Totale Items */}
            <div className="price">
              {Number(e.price) * Number(e.quantity)} $
            </div>{" "}
            
            <IconButton onClick={() => dispatch(deleteItem(e))}>
              <Delete color="error" />
            </IconButton>
          </Paper>
        );
      })}

      <Paper>
        <div className="sub-total">
          <Typography variant="h6" p={2}>
            Check Out
          </Typography>

          <div>
            <Typography variant="h6" p={2}>
              Total :
            </Typography>
            <Typography variant="h6" p={2}>
              {subTotal} $
            </Typography>
          </div>
        </div>

        <Divider />

        <Button fullWidth variant="contained">
          Check
        </Button>
      </Paper>
    </Box>
  );
};

export default Cart;
