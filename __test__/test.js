
import expect from 'expect';

import Graph from '../src/dijkstra';

import fs from 'fs';

  describe( 'Dijkstra', () => {
    describe( '`shortestPath` Graph1', () => {
        let g;
        beforeEach(() => {
        const expected = fs.readFileSync('__test__/graph1.json', 'utf8').trim();
        const problem = JSON.parse(expected);
        const commonKeys =Object.keys(problem);
        g = new Graph();
        commonKeys.map((key) => {
        g.addVertex(key, problem[key]);
      });
    });

      it( 'should return the shortest path array and its length', () => {
        const [shortestPath, distancesPath] = g.shortestPath('A', 'H');
        const result = shortestPath.concat(['A']).reverse();
        expect(result).toEqual(['A', 'B', 'F', 'H']);
        expect(distancesPath).toEqual(12);
      });
    });

    describe( '`shortestPath` Graph2', () => {
        let g;
        beforeEach(() => {
        const expected = fs.readFileSync('__test__/graph2.json', 'utf8').trim();
        const problem = JSON.parse(expected);
        const commonKeys =Object.keys(problem);
        g = new Graph();
        commonKeys.map((key) => {
        g.addVertex(key, problem[key]);
      });
    });

      it( 'should return the shortest path array and its length', () => {
        const [shortestPath, distancesPath] = g.shortestPath('A', 'F');
        const result = shortestPath.concat(['A']).reverse();
        expect(result).toEqual(['A', 'B', 'D', 'F']);
        expect(distancesPath).toEqual(11);
      });
    });

});
