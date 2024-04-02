import "./prodect-detalis.css";
import { useParams } from "react-router-dom";
import { useGetOneProductQuery } from "../../Redux/pokemonAPI";
import {
  Badge,
  Box,
  Button,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { useRef, useState } from "react";
import DetailsThumb from "./DetailsThumb ";
import { Add, Remove, ShoppingCart } from "@mui/icons-material";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreasNumberItems,
  increasNumberItems,
} from "../../Redux/counterSlice";

const ProdectDetalis = () => {
  let { id } = useParams();
  const { data, error, isLoading } = useGetOneProductQuery(id); // onle One Product

  const [index, setindex] = useState(0);
  const myRef = useRef(null);

  const handleTab = (index) => {
    setindex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  const { selectedPrpdectID, selectedPrpdect } = useSelector(
    (state) => state.cartt
  ); // acces to the data in store

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 0,
      top: 0,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "13px 8px",
      fontSize: "15px",
      borderRadius: "50%",
    },
  }));

  const dispatch = useDispatch();

  // Namber of quantity
  const productQuantity = (e) => {
    const myProduct = selectedPrpdect.find((item) => {
      return item.id === e.id;
    });

    return myProduct.quantity;
  };

  // --------------------------------------------------------------------------

  if (error) {
    return <h1>error</h1>;
  }

  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (data) {
    return (
      <div className="app">
        <div className="details">
          <div className="big-img">
            <img src={data.imageLink[index]} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{data.productName}</h2>
              <span>${data.price}</span>
            </div>
            {/* <Colors colors={item.colors} /> */}

            <p>{data.description}</p>

            <DetailsThumb
              images={data.imageLink}
              tab={handleTab}
              myRef={myRef}
            />

            {/* Add Button */}
            {selectedPrpdectID.includes(data.id) ? (
              <div
                style={{
                  display: "flex",
                  width: "35%",
                  marginLeft: "-20px",
                  marginTop: "20px",
                  alignItems: "center",
                  justifyContent: "space-between ",
                }}
              >
                <IconButton
                  sx={{ ml: "10px" }}
                  onClick={() => dispatch(decreasNumberItems(data))}
                >
                  <Remove />
                </IconButton>

                <StyledBadge
                  badgeContent={productQuantity(data)}
                  color="secondary"
                />

                <IconButton
                  sx={{ mr: "10px" }}
                  onClick={() => dispatch(increasNumberItems(data))}
                >
                  <Add />
                </IconButton>
              </div>
            ) : (
              <Button
                sx={{ textTransform: "capitalize" , mt:"10px"}}
                variant="contained"
                color="primary"
                onClick={() => dispatch(addToCart(data))}
              >
                <ShoppingCart/> add to Cart
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default ProdectDetalis;
