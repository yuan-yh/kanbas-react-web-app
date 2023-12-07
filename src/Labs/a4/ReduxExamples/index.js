import { useSelector, useDispatch } from "react-redux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
function HelloRedux() {
  const { message } = useSelector((state) => state.helloReducer);
  return (
    <div>
      <h1>Hello Redux</h1>
      <h2>{message}</h2>
      <CounterRedux />
      <AddRedux />
    </div>
  );
}
export default HelloRedux;