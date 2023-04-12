import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCheckTodo } from "../../Redux/actions";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, priority, completed, id }) {
  const [checked, setChecked] = useState(completed);

  const dispatch = useDispatch()

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleCheckTodo(id))

  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: '1px'}}>
        {priority}
      </Tag>
    </Row>
  );
}
