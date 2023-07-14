import { useRouter } from "next/router";
import styles from "@/styles/WrapperProducts.module.scss";

export default function locations({ data }) {
  const router = useRouter();
  const onHandleclick = (id) => {
    router.push(`/locations/${id}`);
  };

  return (
    <>
      <div className={styles.WrapperProducts}>
        <h3> LOREM IPSUM</h3>
        <div className={styles.backgroundList}>
          <div className={styles.listProducts}>
            {" "}
            {data.products.map((product) => (
              <div key={data.id} className={styles.Product}>
                <div
                  className={styles.images}
                  onClick={() => onHandleclick(product.id)}>
                  <img src={product.thumbnail} alt={product.title} />{" "}
                </div>{" "}
              </div>
            ))}
          </div>{" "}
        </div>
      </div>
      ;
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = res.status === 200 ? await res.json() : {};

  return {
    props: {
      data: data,
    },
  };
}
