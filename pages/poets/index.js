//runs at build time
import Link from "next/Link";
import styles from "../../styles/Poems.module.module.css";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const res1 = await fetch("http://206.189.59.213/api/business-info");

  const data1 = await res1.json();
  const data = await res.json();

  return {
    props: { names: data, data1 },
  };
};

const Friends = ({ names, data1 }) => {
  console.log(data1);
  return (
    <div>
      <h2>Poets</h2>
      {names.map((friend) => (
        <Link href={`/poets/${friend.id}`} key={friend.id}>
          <a className={styles.single}>
            <h3>{friend.name}</h3>
          </a>
        </Link>
      ))}
      {JSON.stringify(data1)}
    </div>
  );
};

export default Friends;
