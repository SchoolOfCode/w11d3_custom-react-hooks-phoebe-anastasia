import useFetch from "../../hooks/useFetch";

function DadJoke() {
const { data, error } = useFetch("https://icanhazdadjoke.com");
console.log(data)

if (error) {
  return <p>Error!</p>;
    }

  return (
    <section>
      <h4>Dad Joke!</h4>
      <p>{data?.joke}</p>
    </section>
  );
}

export default DadJoke;
