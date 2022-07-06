import useDocumentTitle from "../../hooks/useDocumentTitle";
import useCounter from "../../hooks/useCounter";

function BasicCounter() {
  const {count, increment, decrement} = useCounter()
  const {documentTitle} = useDocumentTitle();

  return (
    <div>
  <h4>{documentTitle}</h4>
      <button onClick={decrement}>Less</button>
      <output>{count}</output>
      <button onClick={increment}>More</button>
    </div>
  );
}

export default BasicCounter;
