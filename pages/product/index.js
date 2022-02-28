import Link from "next/link";

// we are not using a plain anchor tag for the routing becuase it would make a server request
function ProductList({ productId = 100 }) {
  return (
    <>
      <h2>
        <Link href="product/1">
          <a>Product 1</a>
        </Link>
      </h2>
      <h2>
        {" "}
        <Link href="product/2">
          <a>Product 2</a>
        </Link>
      </h2>
      <h2>
        {" "}
        <Link href="product/2" replace>
          <a>Product 3</a>
        </Link>
      </h2>
      <h2>
        {" "}
        <Link href={`/product/${productId}`}>
          <a>Product dynamic</a>
        </Link>
      </h2>

      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
}

export default ProductList;
