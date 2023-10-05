import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; //Import useNavigate

export default function UpdatePage() {
  const { itemId } = useParams(); //Get the itemId from the url};
  const navigate = useNavigate(); //Create a navigate constant
  const url = `https://crud-app1-5a6eb-default-rtdb.europe-west1.firebasedatabase.app/posts/${itemId}.json`;

  /*for params can also say 
  const params = useParams();
  const url = `https://crud-app1-5a6eb-default-rtdb.europe-west1.firebasedatabase.app/posts/${params.postId}.json`;
   */

  const [post, setPost] = useState({
    caption: "",
    body: "",
    image: "",
    uid: "",
  });

  /*instead can do:
  const [post, setPost] = useState({}); 
  const [caption, setCaption] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [uid, setUid] = useState("");
  */

  useEffect(() => {
    //fetch existing post data based on the itemId
    async function getPost() {
      const response = await fetch(url);
      const postData = await response.json();
      setPost(postData);
      /*setCaption(postData.caption);
      setBody(postData.body);
      setImg(postData.img);
      setUid(postData.uid);*/
    }
    getPost();
  }, [url]);

  async function updatePost(postToUpdate) {
    postToUpdate.preventDefault(); // Prevent default form behavior - makes sure the form data is submitted via the  async fetch request instead of triggering a full page refresh (which is the default behaviour)

    postToUpdate.uid = post.uid;

    const response = await fetch(url, {
      method: "PUT", //PUT instead of POST as it is an update
      body: JSON.stringify(post),
    });

    if (response.ok) {
      console.log("Post updated");
      navigate("/"); //Redirect to homepage
    } else {
      console.log("An error occurred while updating the post");
    }
  }

  async function deletePost() {
    const wantToDelete = confirm("Are you sure you want to delete?");

    if (wantToDelete) {
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Post deleted");
        navigate("/"); //Redirect to homepage
      } else {
        console.log("An error occurred while deleting the post");
      }
    }
  }

  return (
    <section className="page">
      <h1>Update Post</h1>
      <form onSubmit={updatePost}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Type a title"
          value={post.caption}
          /*alternative: value={caption} */
          onChange={(e) => setPost({ ...post, caption: e.target.value })}
          /*alternative: onChange={(e) => setCaption(e.target.value)} */
        />
        <label>Body</label>
        <input
          type="text"
          placeholder="Type a body text"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <label>Image</label>
        <input
          type="url"
          placeholder="Paste image url"
          value={post.image}
          onChange={(e) => setPost({ ...post, image: e.target.value })}
        />

        <button type="submit">Save</button>
      </form>
      <button onClick={deletePost}>Delete Post</button>
    </section>
  );
}
