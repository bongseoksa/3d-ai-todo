async function Home() {
  const data = "This content is rendered on the server.";
  const response = await fetch('http://localhost:4000/api/hello');
  const { message } = await response.json();
  
  return (
    <div>
      <h1>Server-Side Rendered Page</h1>
      <p>{data}</p>
      <p>{message}</p>
    </div>
  );
}

export default Home;