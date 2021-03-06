
import { getX, getY, toCubic, evalDeCasteljau } from 'flo-bezier3';

import { drawFs } from 'flo-draw';
import { IPointOnShape } from '../../point-on-shape/point-on-shape';


function drawMinY(g: SVGGElement, pos: IPointOnShape) {	
    let p = evalDeCasteljau(pos.curve.ps, pos.t) ;

    let ps = toCubic(pos.curve.ps);
    console.log('x: ', getX(ps));
    console.log('y: ', getY(ps));
    console.log('t: ', pos.t);

    let $elems = drawFs.crossHair( 
            g, p, 'red thin10 nofill'
	);  
	
    return $elems;
}


export { drawMinY }
