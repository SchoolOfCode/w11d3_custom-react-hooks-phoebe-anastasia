### Task 1 
1.1.
- create custom useDocumentTitle hook DONE
- hook has to change the title DONE 
- imported into basicCounter component to reflect the count DONE
1.2
- Extract fiunctionality of decrement and increment count out of Sheep Counter and Basic Counter
- Create a custom hook function in useCounter.js
- return increment, decrement and count
- import this hook into Sheep Counter and Basic Counter
- Destructure the hook
- Render increment, decrement, count 

### Task 2 

- extracted functionality of controlled input
- created a custom hook in usePersistentState
- return handlechange and text
- import this hook into controlled input 
- destructure the hook 
- handle the event change 

### Task 3
- extract functionality from dadJoke and Pokemon viewer
- created a custom hook to do a fetch request
- give this function a prop of a 'url'
- use SideEffect and put 'url' in there as a dependency
- export it to DadJoke and Pokemon viewer
- destructure the hook
- give each one a different url as a prop

dadJoke url: "https://icanhazdadjoke.com/"
Pokemon url: `https://pokeapi.co/api/v2/pokemon/${id}`

original DadJoke:

const [joke, setJoke] = useState(“”);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(“https://icanhazdadjoke.com/”, {
      headers: { Accept: “application/json” },
    })
      .then((res) => res.json())
      .then(({ joke }) => setJoke(joke))
      .catch((err) => setError(err));
  }, []);
  if (error) {
    return <p>Error!</p>;
  }

  ### Bonus

  - create a custom hook that can add event listener
  - event listener should be added to the window and called a callback with the event object
  - make it do a clean up with the useEffect callback