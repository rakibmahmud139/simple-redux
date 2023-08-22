import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/features/counter/counterSlice";

const Counter = () => {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(incrementByValue(5))}>Increment by 5</button>
            <br />
            <button onClick={() => dispatch(increment())}>Increment</button>
            <div>
                <h3>{count}</h3>
            </div>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;