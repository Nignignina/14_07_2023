export default function card(props) {
  console.log(props);

  return (
    <>
      <div className="card">{props.data.title}</div>;
    </>
  );
}
export async function getServerSideProps(context) {
  const queryId = context.query.id;
  console.log(context.query.id);

  const res = await fetch(`https://dummyjson.com/products/${queryId}`);

  const data = res.status === 200 ? await res.json() : {};

  return {
    props: {
      data: data,
    },
  };
}
