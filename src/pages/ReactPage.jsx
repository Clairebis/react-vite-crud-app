import { useEffect, useState } from "react";
import Postitem from "../components/Postitem";

export default function ReactPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const url =
        "https://crud-app1-5a6eb-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
      const response = await fetch(url);
      const data = await response.json();
      const postsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));

      console.log(data);
      console.log(postsArray);
      setPosts(postsArray);
    }

    getPosts();
  }, []);

  /*for (const post of posts) {
    console.log(post);
  }*/ /*same as map below*/

  return (
    <section className="page">
      <h1>React Page</h1>

      <section className="grid">
        {posts.map((item) => (
          <Postitem item={item} key={item.id} />
        ))}
      </section>
    </section>
  );
}
