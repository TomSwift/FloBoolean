"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIsolatedComponents = void 0;
/**
 * @param containers all containers
 * @param connectedContainers
 */
function getIsolatedComponents(containers, connectedContainers) {
    let connectedContainers_ = new Set();
    for (let cs of connectedContainers) {
        for (let c of cs) {
            connectedContainers_.add(c);
        }
    }
    let res = [];
    for (let i = 0; i < containers.length; i++) {
        let container = containers[i];
        if (!connectedContainers_.has(container)) {
            res.push(container);
        }
    }
    return res;
}
exports.getIsolatedComponents = getIsolatedComponents;
//# sourceMappingURL=get-isolated-containers.js.map