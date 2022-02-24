import { useRouter } from "next/router";
function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs or feature {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs or feature {params[0]}</h1>;
  } else {
    return <h1> Docs Page </h1>;
  }
}

export default Doc;
