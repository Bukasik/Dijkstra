import fs from 'fs';
import readlineSync from 'readline-sync';
import Graph from './dijkstra';

const readContent = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf8').trim();
  return JSON.parse(data);
};

const printShortPath = (graph, start, finish) => {
  const [shortestPath, distancesPath] = graph.shortestPath(start, finish);
  return `The shortest way from point ${start} to point ${finish} - ${shortestPath.concat([start]).reverse()} is full weight of the ${distancesPath}.`;
};


const shortPath = (filePath) => {
  const content = readContent(filePath);

  console.log(Object.keys(content));
  const startVertex = readlineSync.question('Initial vertex ');
  const finishVertex = readlineSync.question('Ultimate vertex ');

  const commonKeys = Object.keys(content);
  let g;
  g = new Graph();
  commonKeys.map((key) => {
    g.addVertex(key, content[key]);
  });

  return printShortPath(g, startVertex, finishVertex);
};

export default shortPath;
