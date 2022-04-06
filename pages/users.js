import User from "../components/user";

function userList({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map((item) => {
        return (
          <div key={item.id}>
            <User user={item} />
          </div>
        );
      })}
    </>
  );
}

export default userList;
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
