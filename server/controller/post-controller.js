import post from "../Schema/Post-Schema.js";

export const createPost = async (request, response) => {
  console.log(request.body);
  try {
    const Post = await new post(request.body);
    Post.save();
    response.status(200).json("blog saved successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getAllPosts = async (request, response) => {
  try {
    let posts = await post.find({});
    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getPost = async (request, response) => {
  try {
    let Post = await post.findById(request.params.id);
    response.status(200).json(Post);
  } catch (error) {
    response.status(500).json(error);
  }
};
