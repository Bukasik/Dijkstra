#!/usr/bin/env node

import PriorityQueue from './priority-queue';
import fs from 'fs';

class Graph {
  constructor() {
    this.INFINITY = 1 / 0;
    this.vertices = {};
  }

  addVertex(name, edges) {
    this.vertices[name] = edges;
  }

  shortestPath(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;
    let vertex;
    let neighbor;
    let alt;

    for (vertex in this.vertices) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(0, vertex);
      } else {
        distances[vertex] = this.INFINITY;
        nodes.enqueue(this.INFINITY, vertex);
      }

      previous[vertex] = null;
    }

    while (!nodes.isEmpty()) {
      smallest = nodes.dequeue();
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (!smallest || distances[smallest] === this.INFINITY) {
        continue;
      }

      for (neighbor in this.vertices[smallest]) {
        if (this.vertices[smallest][neighbor] < 0) {
          throw new Error(`dijkstra does not allow negative edge weights.
                      Bad edge: Weight:  ${this.vertices[smallest][neighbor]}`);
        }

        alt = distances[smallest] + this.vertices[smallest][neighbor];
        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = smallest;
          nodes.enqueue(alt, neighbor);
        }
      }
    }
    return [path, distances[finish]];
  }

}


export default Graph;
