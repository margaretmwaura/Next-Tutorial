function UserList({ users }) {
  return (
    <>
      {" "}
      <h1> User List</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>The user name is {user.name}</p>
          </div>
        );
      })}
    </>
  );
}

export default UserList;

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
