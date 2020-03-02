import { PtsCanvas } from "react-pts-canvas";
import { Color, Create, Pt, Num, Rectangle, UIButton, UI, Bound } from "pts";

class Homepage extends PtsCanvas {
    constructor(props) {
        super(props);
        this.blogButton = null;
        this.portfolioButton = null;
        this.musicButton = null;

        this.centerX = null;
        this.centerY = null;
        // 1% of the space width
        this.yPerc = null;

        // Used to prevent buttons from re-rendering at every animation cycle
        this.spaceSize = null;
    }

    animate(time, ftime, space) {
        // Background

        // Grid of colored squares
        var grid = [];
        // Colors
        let cu = Color.lab(Color.maxValues("lab"))
        let ratio = space.size.x / space.size.y;
        let columnNum = 20 * ratio
        let rowNum = 20
        // Page font
        this.form.font(75, "normal", "normal", 1, "Roboto")
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
        this.centerX = space.size.x / 2
        this.centerY = space.size.y / 2
        this.yPerc = space.size.y / 100

        let nameRect = Rectangle.fromCenter( [this.centerX,this.centerY - (this.yPerc * 15)], 400  ); //size.$max( space.size.$divide(6) )
        this.form.fill("rgba(0,0,0,0)").font(75).stroke("rgba(0,0,0,0)", 3).rect( nameRect );
        this.form.fillOnly("#FFF").alignText("center").paragraphBox( nameRect, "robbiegay", 1, "middle", false );

        let blogRect = Rectangle.fromCenter( [this.centerX,this.centerY + (this.yPerc * 10)], 300  );
        this.form.fill("rgba(0,0,0,0)").font(40).stroke("rgba(0,0,0,0)", 3).rect( blogRect );
        this.form.fillOnly("#FFF").alignText("center").paragraphBox( blogRect, "dev blog", 1, "middle", false );
        this.blogButton.render( g => this.form.fillOnly("rgba(0,0,0,0.05)").polygon(g) );

        let portfolioRect = Rectangle.fromCenter( [this.centerX,this.centerY + (this.yPerc * 20)], 300  );
        this.form.fill("rgba(0,0,0,0)").font(40).stroke("rgba(0,0,0,0)", 3).rect( portfolioRect );
        this.form.fillOnly("#FFF").alignText("center").paragraphBox( portfolioRect, "portfolio", 1, "middle", false );
        this.portfolioButton.render( g => this.form.fillOnly("rgba(0,0,0,0.05)").polygon(g) );

        let musicRect = Rectangle.fromCenter( [this.centerX,this.centerY + (this.yPerc * 30)], 300  );
        this.form.fill("rgba(0,0,0,0)").font(40).stroke("rgba(0,0,0,0)", 3).rect( musicRect );
        this.form.fillOnly("#FFF").alignText("center").paragraphBox( musicRect, "music", 1, "middle", false );
        this.musicButton.render( g => this.form.fillOnly("rgba(0,0,0,0.05)").polygon(g) );
        
        // checks to see if window has been resized. If so, re-renders buttons
        if (this.spaceSize.x !== space.size.x) {
            let hovOn = (ui) => ui.group.scale(1.1, ui.group.centroid());;
            let hovOff = (ui) => ui.group.scale(100/110, ui.group.centroid());
            this.blogButton = UIButton.fromPolygon( [
                [this.centerX - 100, this.centerY + (this.yPerc * 6)], 
                [this.centerX - 100 , this.centerY + (this.yPerc * 14)], 
                [this.centerX + 100, this.centerY + (this.yPerc * 14)], 
                [this.centerX + 100, this.centerY + (this.yPerc * 6)]
            ] );
            this.blogButton.onClick( x => { 
                this.props.changePage("blog");
            } );
            this.blogButton.onHover( hovOn, hovOff );

            this.portfolioButton = UIButton.fromPolygon( [
                [this.centerX - 100, this.centerY + (this.yPerc * 16)], 
                [this.centerX - 100 , this.centerY + (this.yPerc * 24)], 
                [this.centerX + 100, this.centerY + (this.yPerc * 24)], 
                [this.centerX + 100, this.centerY + (this.yPerc * 16)]
            ] );
            this.portfolioButton.onClick( x => { 
                this.props.changePage("portfolio");
            } );
            this.portfolioButton.onHover( hovOn, hovOff );
    
            this.musicButton = UIButton.fromPolygon( [
                [this.centerX - 100, this.centerY + (this.yPerc * 26)], 
                [this.centerX - 100 , this.centerY + (this.yPerc * 34)], 
                [this.centerX + 100, this.centerY + (this.yPerc * 34)], 
                [this.centerX + 100, this.centerY + (this.yPerc * 26)]
            ] );
            this.musicButton.onClick( x => { 
                this.props.changePage("music");
            } );
            this.musicButton.onHover( hovOn, hovOff );

            // After re-rendering buttons, updates spaceSize variable to new window size
            this.spaceSize = space.size
        }
    }

    action(type, x, y, event) { 
        UI.track( [this.blogButton, this.portfolioButton, this.musicButton], type, new Pt(x, y), event );
    }

    start(bound, space) {
        // Creates buttons on page load
        this.spaceSize = space.size;
        let hovOn = (ui) => ui.group.scale(1.1, ui.group.centroid());;
        let hovOff = (ui) => ui.group.scale(100/110, ui.group.centroid());
        this.centerX = space.size.x / 2
        this.centerY = space.size.y / 2
        this.yPerc = space.size.y / 100

        this.blogButton = UIButton.fromPolygon( [
            [this.centerX - 100, this.centerY + (this.yPerc * 6)], 
            [this.centerX - 100 , this.centerY + (this.yPerc * 14)], 
            [this.centerX + 100, this.centerY + (this.yPerc * 14)], 
            [this.centerX + 100, this.centerY + (this.yPerc * 6)]
        ] );
        this.blogButton.onClick( x => { 
            this.props.changePage("blog");
        } );
        this.blogButton.onHover( hovOn, hovOff );

        this.portfolioButton = UIButton.fromPolygon( [
            [this.centerX - 100, this.centerY + (this.yPerc * 16)], 
            [this.centerX - 100 , this.centerY + (this.yPerc * 24)], 
            [this.centerX + 100, this.centerY + (this.yPerc * 24)], 
            [this.centerX + 100, this.centerY + (this.yPerc * 16)]
        ] );
        this.portfolioButton.onClick( x => { 
            this.props.changePage("portfolio");
        } );
        this.portfolioButton.onHover( hovOn, hovOff );

        this.musicButton = UIButton.fromPolygon( [
            [this.centerX - 100, this.centerY + (this.yPerc * 26)], 
            [this.centerX - 100 , this.centerY + (this.yPerc * 34)], 
            [this.centerX + 100, this.centerY + (this.yPerc * 34)], 
            [this.centerX + 100, this.centerY + (this.yPerc * 26)]
        ] );
        this.musicButton.onClick( x => { 
            this.props.changePage("music");
        } );
        this.musicButton.onHover( hovOn, hovOff );

        space.bindMouse().bindTouch().play();
    }
}

export default Homepage

/*

3.2.20: Done with initial build of new website. Started on Thursday Feb 28, 2020. Finished 
the following Monday. Took about 30 hours.
General:

*/
