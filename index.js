import {ComponentA} from './ComponentA.js';
import {ComponentB} from './ComponentB.js';

function innerHTMLComponent() {
  window.timesA = [];

  for(let i = 0; i < 100; i++) {
    const container = document.createElement('div');
    document.body.append(container);
    const start = performance.now();
    for(let j = 0; j < 100000; j++) {
      container.append(new ComponentA());
    }
    const stop = performance.now();
    const time = stop - start;
    window.timesA.push(time);
    container.remove();
  }
  const minVal = Math.min(...window.timesA);
  const maxVal = Math.max(...window.timesA);
  const sum = window.timesA.reduce((s, v) => { return s + v}, 0);
  const avgTime = (sum - minVal - maxVal) / (window.timesA.length - 2);
  console.log('Results:', window.timesA);
  console.log('Avg time:', avgTime);
}

function templateAndCloneNodeComponent() {
  window.timesB = [];

  for(let i = 0; i < 100; i++) {
    const container = document.createElement('div');
    document.body.append(container);
    const start = performance.now();
    for(let j = 0; j < 100000; j++) {
      container.append(new ComponentB());
    }
    const stop = performance.now();
    const time = stop - start;
    window.timesB.push(time);
    container.remove();
  }
  const minVal = Math.min(...window.timesB);
  const maxVal = Math.max(...window.timesB);
  const sum = window.timesB.reduce((s, v) => { return s + v}, 0);
  const avgTime = (sum - minVal - maxVal) / (window.timesB.length - 2);
  console.log('Results:', window.timesB);
  console.log('Avg time:', avgTime);
}

innerHTMLComponent();
templateAndCloneNodeComponent();