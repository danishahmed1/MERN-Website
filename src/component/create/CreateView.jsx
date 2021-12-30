import React, { useState } from "react";
import { Box, TextareaAutosize, Button, FormControl, InputBase } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AddCircle as Add, CallEnd } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { createPost } from "../../service/api";

const useStyle = makeStyles({
  container: {
    margin: "50px 100px",
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },

  root: {
    // marginTop: 10,
    display: "flex",
    flex_Direction: "row",
  },
  textfield: {
    flex: 1,
    margin: "0 30px",
    fontSize: 25,
  },
  textarea: {
    width: "100%",
    border: "2px dotted",
    marginTop: 60,
    fontSize: 18,
    "&:focus-visible": {
      outline: "none",
    },
  },
});

const schema = {
  title: "",
  description: "",
  picture: "",
  username: "danish ahmed",
  categories: "All",
  createdDate: new Date(),
};

export const CreateView = () => {
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  const css = useStyle();

  const [post, setPost] = useState(schema);
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const savePost = async () => {
    await createPost(post);
    navigate("/");
  };

  const navigate = useNavigate();

  return (
    <Box>
      <Box className={css.container}>
        <img src={url} alt="post" className={css.image} />

        <FormControl className={css.root}>
          <Add fontSize="large" color="action" />
          <InputBase onChange={(e) => handleChange(e)} name="title" placeholder="Title" className={css.textfield} />
          <Button onClick={() => savePost()} variant="contained" color="primary">
            Publish
          </Button>
        </FormControl>
        <TextareaAutosize
          rowsMin={10}
          placeholder="Tell your story..."
          className={css.textarea}
          name="description"
          onChange={(e) => handleChange(e)}
        />
      </Box>
    </Box>
  );
};
