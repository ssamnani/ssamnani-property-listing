import { Radio } from "antd";

function SaleRentToggle() {
  return (
    <>
      <Radio.Group defaultValue="sale" buttonStyle="solid" size="large">
        <Radio.Button value="sale">Sale</Radio.Button>
        <Radio.Button value="rent">Rent</Radio.Button>
      </Radio.Group>
    </>
  );
}

export default SaleRentToggle;
