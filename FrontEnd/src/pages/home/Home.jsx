import "./Home.css";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
  useTheme,
  CircularProgress,
  Box,
  IconButton,
  Badge,
} from "@mui/material";
import { useGetPokemonByNameQuery } from "../../Redux/pokemonAPI";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreasNumberItems,
  increasNumberItems,
} from "../../Redux/counterSlice";
import { Add, Remove } from "@mui/icons-material";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

// ------------------------------------------------------------------
// const myListCard = [
//   {
//     id:1,
//     title: "Shrimp and Chorizo Paella",
//     date: "September 14, 2016",
//     img: "/img/pexels-konstantin-mishchenko-1926769.jpg",
//     text: ` This impressive paella is a perfect party dish and a fun meal to
//     cook together with your guests `,
//   },
//   {
//     id:2,
//     title: "Shrimp and Chorizo Paella",
//     date: "September 14, 2016",
//     img: "/img/pexels-konstantin-mishchenko-1926769.jpg",
//     text: ` This impressive paella is a perfect party dish and a fun meal to
//     cook together with your guests `,
//   },
//   {
//     id:3,
//     title: "Shrimp and Chorizo Paella",
//     date: "September 14, 2016",
//     img: "/img/pexels-konstantin-mishchenko-1926769.jpg",
//     text: ` This impressive paella is a perfect party dish and a fun meal to
//     cook together with your guests `,
//   },
// ];

// ------------------------------------------------------------------
const Home = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery();
  const { selectedPrpdectID ,selectedPrpdect } = useSelector((state) => state.cartt); // acces to the data in store
  const theme = useTheme();
  const dispatch = useDispatch();

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

  const productQuantity =(e)=>{
    const myProduct = selectedPrpdect.find((item ) => {
      return item.id === e.id
    });
    
    return myProduct.quantity
  }

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
      <Stack
        direction={"row"}
        sx={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((e , index) => {
          return (
            <Card
              className="card"
              sx={{ maxWidth: 277, mx: 2, my: 2 }}
              key={e.id}
            >
              <CardMedia
                component="img"
                height="277"
                image={e.imageLink}
                alt={e.productName}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {e.description}
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                sx={{ justifyContent: "space-between" }}
              >
                {/* Add Button */}
                {selectedPrpdectID.includes(e.id) ? (
                  <div
                    style={{
                      display: "flex",
                      width: "50%",
                      marginLeft: "-12px",
                      alignItems: "center",
                      justifyContent: "space-between ",
                    }}
                  >
                    <IconButton
                      sx={{ ml: "10px" }}
                      onClick={() => dispatch(decreasNumberItems(e))}
                    >
                      <Remove />
                    </IconButton>

                    <StyledBadge badgeContent={productQuantity(e)} color="secondary" />

                    <IconButton
                      sx={{ mr: "10px" }}
                      onClick={() => dispatch(increasNumberItems(e))}
                    >
                      <Add />
                    </IconButton>
                  </div>
                ) : (
                  <Button
                    sx={{ textTransform: "capitalize" }}
                    variant="contained"
                    color="primary"
                    onClick={() => dispatch(addToCart(e))}
                  >
                    add to Cart
                  </Button>
                )}

                <Typography variant="body1" color={theme.palette.success.light}>
                  {e.price + "$"}
                </Typography>
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    );
  }
};

export default Home;
