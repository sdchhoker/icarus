//size is size of array
function quickFind(size) {
  const root = [];

  for (let i = 0; i < size; i += 1) {
    root[i] = i;
  }

  function find(vertex) {
    let parent = root[vertex];
    let currentVertex = vertex;

    while (parent !== currentVertex) {
      currentVertex = parent
      parent = root[currentVertex];
    }
    return root[vertex];
  }

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX !== rootY) {
      root[rootY] = rootX;
    }
  }

  function connected(x, y) {
    return find(x) === find(y);
  }

  return {
    find,
    union,
    connected
  };
}

module.exports = quickFind