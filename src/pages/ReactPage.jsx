import { useState } from "react";

export default function ReactPage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      caption: "I love Aarhus",
      image:
        "https://images.unsplash.com/photo-1595146463222-19603449c6af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWFyaHVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      caption: "And Aberdeen",
      image:
        "https://images.unsplash.com/photo-1609608238719-12c3222f5de9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJlcmRlZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      caption: "And I love Edinburgh too",
      image:
        "https://images.unsplash.com/photo-1594800083755-8fe31b2c99df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWRpbmJ1cmdofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
  ]);
  console.log(posts);

  /*for (const post of posts) {
    console.log(post);
  }*/ /*same as map below*/

  return (
    <section className="page">
      <h1>React Page</h1>

      <section>
        {posts.map((item) => (
          <article key={posts.id}>
            <h3>{item.caption}</h3>
            <img src={item.image} alt={item.caption} />
          </article>
        ))}
      </section>
    </section>
  );
}
