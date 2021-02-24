//runs at build time
import Link from "next/Link";
import styles from "../../styles/Poems.module.module.css";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { names: data },
  };
};

const Friends = ({ names }) => {
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
    </div>
  );
};

export default Friends;
