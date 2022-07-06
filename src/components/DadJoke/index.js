import useFetch from "../../hooks/useFetch";

function DadJoke() {
const {data} = useFetch("https://icanhazdadjoke.com")
  //  if (error) {
  //   return <p>Error!</p>;
  //  }
  console.log(data)
  return (
    <section>
      <h4>Dad Joke!</h4>
      <p>{data}</p>
    </section>
  );
}

export default DadJoke;
