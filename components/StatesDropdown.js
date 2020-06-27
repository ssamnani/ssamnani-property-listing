import { Select } from "antd";

const { Option } = Select;

const states = [
  "All States",
  "Selangor",
  "Kuala Lumpur",
  "Johor",
  "Penang",
  "Perak",
  "Negari Sembilan",
  "Meleka",
  "Pahang",
  "Sabah",
  "Sarawak",
  "Kedah",
  "Putrajaya",
  "Kelantan",
  "Terrenganu",
  "Perlis",
  "Labuan",
];

const children = [];
for (let i = 0; i < states.length; i++) {
  children.push(<Option key={i.toString(36) + i}>{states[i]}</Option>);
}

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

function StatesDropdown() {
  return (
    <Select
      size={"default"}
      defaultValue="All States"
      onChange={handleChange}
      style={{ width: 200 }}
      size="large"
    >
      {children}
    </Select>
  );
}

export default StatesDropdown;
