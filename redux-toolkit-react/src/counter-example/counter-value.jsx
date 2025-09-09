import { useSelector } from "react-redux";

function CounterValue() {
  const state = useSelector((state) => state);
  const { countValue } = state.count;
  console.log(countValue)
  return <p style={{color: "white", fontWeight: "bold" }}>Counter value is {countValue}</p>;
}

export default CounterValue;
