import axios from "axios";

const URL = "http://localhost:9000";

export const createPost = async (post) => {
  try {
    return await axios.post(`${URL}/create`, post);
  } catch (error) {
    console.log("Error while calling createPost API ", error);
  }
};

export const getAllPost = async () => {
  try {
    let response = await axios.get(`${URL}/posts`);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error while calling getAllPost API ", error);
  }
};

export const getPost = async (id) => {
  try {
    let response = await axios.get(`${URL}/post/${id}`);

    return response.data;
  } catch (error) {
    console.log("Error while calling getPost API ", error);
  }
};
