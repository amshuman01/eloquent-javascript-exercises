const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

import Graph from "./additional-files/graph.js";

const roadGraphs = await Graph(roads);

for (let keys in roadGraphs) {
  console.log(
    `Roads from ${keys} ${roadGraphs[keys].length > 1 ? "are" : "is"} ${
      roadGraphs[keys]
    }`
  );
}
