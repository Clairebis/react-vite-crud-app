import UserAvatar from "./UserAvatar";

export default function Postitem({ item }) {
  return (
    <article key={item.id}>
      <UserAvatar uid={item.uid} />
      <img src={item.image} alt={item.caption} />
      <h3>{item.caption}</h3>
    </article>
  );
}
