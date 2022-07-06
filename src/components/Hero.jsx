import * as React from "react";
import Filter from "./filter";
import Card from "./Card";

import { data } from "../data";

export default function Hero() {
  const [filteredData, setFilteredData] = React.useState(data);

  return (
    <>
      <Filter data={data} setData={setFilteredData} />
      <Card data={filteredData} />
    </>
  );
}
