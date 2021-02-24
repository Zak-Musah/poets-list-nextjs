export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((name) => {
    return {
      params: { id: name.id.toString() },
    };
  });
  return { paths, fallback: false };
};
///how html pages to generate above

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { poet: data },
  };
};

const PoetDetails = ({ poet }) => {
  return (
    <div>
      <h2>{poet.name}</h2>
      <p>{poet.email}</p>
      <p>{poet.website}</p>
      <p>{poet.address.city}</p>
    </div>
  );
};

export default PoetDetails;
