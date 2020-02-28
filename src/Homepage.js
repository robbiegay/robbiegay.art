import React from 'react';
import { PtsCanvas } from 'react-pts-canvas';
import { Color, Create, Pt, Num, Rectangle, UIButton } from 'pts';

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
            let p2 = space.pointer.$divide(space.size);
            let colorIntensity = 0.65 - (p2.y * 0.3)
            let c1 = cu.$multiply(Pt.make(4, 1).to(colorIntensity, p1.x - 0.5, p1.y - 0.5));
            return Color.LABtoRGB(c1).toString("rgb");
        }

        for (let i = 0, len = grid.length; i < len; i++) {
            grid[i][1].ceil();
            let c = grid[i].interpolate(Num.cycle((time + i * 60) % 1000 / 1000));
            this.form.fillOnly(color(c)).rect(grid[i]);
        }
        
        // Textbox
        // this.form.font(60);
        let centerX = space.size.x / 2
        let centerY = space.size.y / 2
        let yPerc = space.size.y / 100

        let nameRect = Rectangle.fromCenter( [centerX,centerY - (yPerc * 15)], 400  ); //size.$max( space.size.$divide(6) )
        this.form.fill("rgba(0,0,0,0)").font(75).stroke("rgba(0,0,0,0)", 3).rect( nameRect );
        this.form.fillOnly("#FFF").alignText("center").paragraphBox( nameRect, "robbiegay", 1, "middle", false );

        let blogRect = Rectangle.fromCenter( [centerX,centerY + (yPerc * 10)], 300  );
        this.form.fill("rgba(0,0,0,0)").font(40).stroke("rgba(0,0,0,0)", 3).rect( blogRect );
        this.form.fillOnly("#FFF").alignText("center").paragraphBox( blogRect, "dev blog", 1, "middle", false );
        // let button = UIButton.fromCircle( [10, [10,10]] );
        // button.onClick()
        // this.form.fill("rgba(0,0,0,0)").font(40).stroke("rgba(0,0,0,0)", 3).rect( button );
        // this.form.fillOnly("#FFF").alignText("center").paragraphBox( button, "dev blog", 1, "middle", false );


        let portfolioRect = Rectangle.fromCenter( [centerX,centerY + (yPerc * 20)], 300  );
        this.form.fill("rgba(0,0,0,0)").font(40).stroke("rgba(0,0,0,0)", 3).rect( portfolioRect );
        this.form.fillOnly("#FFF").alignText("center").paragraphBox( portfolioRect, "portfolio", 1, "middle", false );

        let musicRect = Rectangle.fromCenter( [centerX,centerY + (yPerc * 30)], 300  );
        this.form.fill("rgba(0,0,0,0)").font(40).stroke("rgba(0,0,0,0)", 3).rect( musicRect );
        this.form.fillOnly("#FFF").alignText("center").paragraphBox( musicRect, "music", 1, "middle", false );
    }

    start(bound, space) {
        space.play();
    }
}

export default Homepage

// make text clickable
