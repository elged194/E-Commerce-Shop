import "./Home.css";
import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
  useTheme,
} from "@mui/material";

// ------------------------------------------------------------------
const myListCard = [
  {
    title: "Shrimp and Chorizo Paella",
    date: "September 14, 2016",
    img: "/img/pexels-konstantin-mishchenko-1926769.jpg",
    text: ` This impressive paella is a perfect party dish and a fun meal to
    cook together with your guests `,
  },
  {
    title: "Shrimp and Chorizo Paella",
    date: "September 14, 2016",
    img: "/img/pexels-konstantin-mishchenko-1926769.jpg",
    text: ` This impressive paella is a perfect party dish and a fun meal to
    cook together with your guests `,
  },
];

// ------------------------------------------------------------------
const Home = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      sx={{ flexWrap: "wrap", justifyContent: "center" }}
    >
      {/* eslint-disable-next-line array-callback-return */}
      {myListCard.map((e) => {
        return (
          <Card sx={{ maxWidth: 277, mx: 2, my: 2 }}>
            <CardMedia
              component="img"
              height="194"
              image={e.img}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {e.text}
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
              >
                add to Cart
              </Button>

              <Typography variant="body1" color={theme.palette.success.light}>
                $100
              </Typography>
            </CardActions>
          </Card>
        );
      })}
    </Stack>
  );
};

export default Home;
