import React from 'react';
import { PtsCanvas } from 'react-pts-canvas';
import { Color, Create, Pt, Num, Rectangle } from 'pts';

class Homepage extends PtsCanvas {

    animate(time, ftime, space) {
        // Background
        var grid = [];
        // Lab max value range (100, 127, 127)
        let cu = Color.lab(Color.maxValues("lab"))
        let ratio = space.size.x / space.size.y;
        let columnNum = 20 * ratio
        let rowNum = 20
        grid = Create.gridCells(space.innerBound, columnNum, rowNum);

        // get LAB color string, given a point position
        let color = (p) => {
            let p1 = p.$divide(space.size);
            let p2 = space.pointer.$divide(space.size); // [0.712290346622467, 0.668083667755127]
            let c1 = cu.$multiply(Pt.make(4, 1).to(p2.x, p1.x - 0.5, p1.y - 0.5));
            return Color.LABtoRGB(c1).toString("rgb");
        }

        for (let i = 0, len = grid.length; i < len; i++) {
            grid[i][1].ceil();
            let c = grid[i].interpolate(Num.cycle((time + i * 60) % 1000 / 1000));
            this.form.fillOnly(color(c)).rect(grid[i]);
        }
        
        // Textbox
        this.form.font(60);
        let rect = Rectangle.fromCenter( space.center, 300  ); //size.$max( space.size.$divide(6) )
        
        this.form.fill("rgba(0,0,0,0)").stroke("rgba(0,0,0,0)", 3).rect( rect );
        this.form.fillOnly("#FFF").alignText("center").paragraphBox( rect, "robbiegay", 1, "middle", false );
    }

    start(bound, space) {
        space.play();
    }
}

export default Homepage
