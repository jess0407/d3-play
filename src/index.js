import "./styles.css";
import * as d3 from "d3";
const ls = d3.scaleLinear().domain([0, 100]).range([0, 600]).clamp(true);
const qs = d3
  .scaleQuantize()
  .domain([0, 100])
  .range(["red", "blue", "pink", "green"]);

const ts = d3
  .scaleTime()
  .domain([new Date(2016, 0, 1), new Date()])
  .range([0, 100]);

const os = d3
  .scaleOrdinal()
  .domain(["Poor", "Great", "Good"])
  .range(["green", "pink", "green"]);
var min;
d3.json("src/data/data.json", (data) => {
  console.log("hi", data);
  min = d3.min(data, (d) => d.age);
  console.log(min, "min");
});
console.log("hde");
document.body.innerHTML = `
${qs(30)} ${qs(80)} ${ls(-20) + ls.invert(300) + ls(105)}
${qs.invertExtent("red")}
${ts(new Date())}

<h3>orginal</h3>
${os("Great")}
<h3>Load Data json</h3>
${min}
`;
