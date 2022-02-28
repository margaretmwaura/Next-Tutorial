import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");

    // This is if you want the history to be added if you do not want the history to be added
    // You use router.replace('/product')
    router.push("/product");
  };
  return (
    <div>
      {" "}
      <h1>Home page</h1>
      <Link href="/blog">
        <a> Blog for our first example</a>
      </Link>
      <Link href="/product">
        <a>This will take us to the products page</a>
      </Link>
      <button onClick={handleClick}>Place order</button>
    </div>
  );
}

export default Home;
