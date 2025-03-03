function drawGraph() {
  let edgeInput = document.getElementById('edgeInput').value;
  let edgesArray = edgeInput.split('\n').map(e => e.trim().split('-').map(Number));
  let graphType = document.querySelector('input[name="graphType"]:checked').value;
  
  let nodesSet = new Set();
  edgesArray.forEach(e => { nodesSet.add(e[0]); nodesSet.add(e[1]); });
  
  let nodes = Array.from(nodesSet).map(id => ({ id, label: id.toString() }));
  let edges = edgesArray.map(e => ({ from: e[0], to: e[1] ,arrows: graphType ==='directed' ? 'to' : ''}));
  
  let container = document.getElementById('network');
  let data = { nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges) };
  let options = {
      physics: {
          enabled: false
      },
      edges: {
          smooth: false
      }
  };
  new vis.Network(container, data, options);
}