import { useState } from "react";
import { useNavigate } from "react-router-dom"; //Import useNavigate

export default function CreatePage() {
  const placeholderImage =
    "https://archive.org/download/placeholder-image/placeholder-image.jpg";

  const [caption, setCaption] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate(); //Create a navigate constant

  const newPost = {
    caption: caption,
    body: body,
    image: image,
    uid: "fTs84KRoYw5pRZEWCq2Z",
  };

  console.log(newPost);

  async function createPost(event) {
    event.preventDefault(); // Prevent default form behavior - makes sure the form data is submitted via the  async fetch request instead of triggering a full page refresh (which is the default behaviour)

    newPost.uid = "fTs84KRoYw5pRZEWCq2Z"; //default user id added to all posts

    const url =
      "https://crud-app1-5a6eb-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newPost), //just called body - that's how it is!
    });

    if (response.ok) {
      console.log("Post created");
      navigate("/"); //Redirect to homepage
    } else {
      console.log("An error occurred");
    }
  }

  return (
    <section className="page">
      <h1>Create New Post</h1>
      <form onSubmit={createPost}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Type a title"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <label>Body</label>
        <input
          type="text"
          placeholder="Type a body text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Image</label>
        <input
          type="url"
          placeholder="Paste image url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        {image ? (
          <img src={image} className="image-preview" alt="Image Preview" />
        ) : (
          <img
            src={placeholderImage}
            className="image-preview"
            alt="Placeholder Image"
          />
        )}

        <button type="submit">Save</button>
      </form>
    </section>
  );
}
