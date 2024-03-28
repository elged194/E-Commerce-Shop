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
} from "@mui/material";
import { useGetPokemonByNameQuery } from "../../Redux/pokemonAPI";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/counterSlice";
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
  const theme = useTheme();
  const dispatch = useDispatch()

  if(error){
    return(
      <h1>error</h1>
    )
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
        {data.map((e) => {
          return (
            <Card className="card" sx={{ maxWidth: 277, mx: 2, my: 2 }} key={e.id}>
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
                <Button
                  sx={{ textTransform: "capitalize" }}
                  variant="contained"
                  color="primary"
                  onClick={() => dispatch(addToCart(e))}
                >
                  add to Cart
                </Button>

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
