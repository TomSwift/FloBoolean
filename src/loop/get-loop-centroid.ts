 
import { getX, getY, getDx, getDy } from "flo-bezier3";
import { gaussQuadrature } from 'flo-gauss-quadrature';
import { evaluate } from 'flo-poly';
import { Loop } from "./loop";
import { getLoopArea } from "./get-loop-area";


/** 
 * Returns the approximate centroid of the given loop
 * * **precondition**: loop must be a jordan curve (i.e. closed and simple)
 * see https://sites.math.washington.edu/~king/coursedir/m324a10/as/centroid-green.pdf
 */
function getLoopCentroid(loop: Loop) {
    let A = getLoopArea(loop);

    let cx = 0;
    let cy = 0;
    for (let curve of loop.curves) {
        let ps = curve.ps;

        let x = getX(ps);
        let y = getY(ps);
        let dx = getDx(ps);
        let dy = getDy(ps);

        let _x = gaussQuadrature(evaluateIntergral([x,x,dy]), [0,1], 16);
        let _y = gaussQuadrature(evaluateIntergral([y,y,dx]), [0,1], 16);

        cx += _x;
        cy += _y;
    }

    let a = 1/(2*A);

    return [-a*cx, a*cy];
}


function evaluateIntergral(polys: number[][]) {
    return (t: number) =>
        evaluate(polys[0], t) * 
        evaluate(polys[1], t) * 
        evaluate(polys[2], t);
}


export { getLoopCentroid }
