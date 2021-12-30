import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  image: {
    width: "100%",
    background: `url(${"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"}) center/55% repeat-x #000`,
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& :first-child": {
      fontSize: 80,
      color: "#FFFFFF",
      lineHeight: 1,
    },
    "& :last-child": {
      fontSize: 30,
      background: "#FFFFFF",
    },
  },
});

function Banner() {
  const classes = useStyle();
  const url = "https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_960_720.jpg";
  return (
    <>
      <Box className={classes.image}>
        <Typography>BLOG</Typography>
        <Typography>MERN Practice</Typography>
      </Box>
    </>
  );
}

export default Banner;
