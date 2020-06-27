import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function SearchBox() {
  return (
    <>
      <Input
        size="large"
        placeholder="Search by Locations, Train stations, Neighbourhoods or Property name"
        prefix={<SearchOutlined />}
      />
    </>
  );
}

export default SearchBox;
