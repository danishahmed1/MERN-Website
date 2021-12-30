import React from "react";
import { Delete, Edit } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
const useStyle = makeStyles({
  container: {
    margin: "50px 100px",
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
    paddingBottom: "20px",
  },
  icons: {
    float: "right",
  },
  icon: {
    margin: 5,
    padding: 5,
    border: "1px solid #878787",
    borderRadius: 10,
  },
  heading: {
    textAlign: "center",
    margin: "70px 0 10px 0",
  },
  author: {
    color: "#878787",
    display: "flex",
    margin: "20px 0",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

export const DetailView = () => {
  const css = useStyle();
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  return (
    <Box className={css.container}>
      <img src={url} className={css.image} />
      <Box className={css.icons}>
        <Edit className={css.icon} color="primary" />
        <Delete className={css.icon} color="error" />
      </Box>
      <Typography className={css.heading} variant="h4">
        Title of the blog
      </Typography>
      <Typography>
        Author: <span style={{ fontWeight: 600 }}>Danish AHmed</span>
      </Typography>
      <Typography style={{ marginLeft: "91%" }}>10/22-2022</Typography>
      <Typography>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containin
      </Typography>
    </Box>
  );
};
