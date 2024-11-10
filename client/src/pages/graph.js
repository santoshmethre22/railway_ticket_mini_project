const adjacencyList = {
    "ARMUGANERI": new Set(["KAYALPATTINAM", "SEYDUNGANALLUR"]),
    "KAYALPATTINAM": new Set(["MADURAI"]),
    "MADURAI": new Set(["KARUR", "DINDIGUAL"]),
    "KARUR": new Set(["ERODE"]),
    "ERODE": new Set(["SALEM", "COIMBATORE"]),
    "COIMBATORE": new Set(["COIMBATORE-NORTH", "METUPALAYAM"]),
    "METUPALAYAM": new Set(["UDAGAMANDALAM"]),
    "UDAGAMANDALAM": new Set([])
};

function dfs(adjacencyList, source, destination, visited = new Set(), path = []) {
    visited.add(source);
    path.push(source);

    if (source === destination) {
        return path;
    }

    if (!adjacencyList[source] || !adjacencyList[source].size) {
        return null;
    }

    for (const neighbor of adjacencyList[source]) {
        if (!visited.has(neighbor)) {
            const newPath = dfs(adjacencyList, neighbor, destination, new Set(visited), path.slice());
            if (newPath) {
                return newPath;
            }
        }
    }

    return null;
}

const source = "ARMUGANERI";
const destination = "UDAGAMANDALAM";

const path = dfs(adjacencyList, source, destination);

if (path) {
    console.log("Path found:");
    console.log(path.join(" -> "));
} else {
    console.log('No path found between the given source and destination stations.');
}

