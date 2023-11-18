import { Button, Space } from "antd";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>The count is {count}</h1>
      <div className="button">
        <Space>
          <Button type="primary" onClick={() => dispatch(increment())}>
            Increase
          </Button>
          <Button type="primary" onClick={() => dispatch(decrement())}>
            Decrease
          </Button>
          <Button
            type="primary"
            onClick={() => dispatch(incrementByAmount(10))}
          >
            Increase by 10
          </Button>
        </Space>
      </div>
    </div>
  );
}
