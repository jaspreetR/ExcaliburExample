import * as React from "react";
import * as ex from "excalibur";

export interface GameProps {
    width: number;
    height: number;
}

export class Game extends React.Component<GameProps, any> {
    game: ex.Engine;

    constructor(props: any) {
        super(props);
        this.game = null;
    }

    public componentDidMount() {
        let engineOptions: ex.IEngineOptions = {
            width: this.props.width,
            height: this.props.height,
            backgroundColor: ex.Color.Black,
            canvasElementId: 'excalibur-container'
        };

        this.game = new ex.Engine(engineOptions)
        let paddle = new ex.Actor(150, this.game.drawHeight - 40, 200, 20);
        // Let's give it some color with one of the predefined
        // color constants
        paddle.color = ex.Color.Chartreuse;

        // Make sure the paddle can partipate in collisions, by default excalibur actors do not collide
        paddle.collisionType = ex.CollisionType.Fixed;

        // `game.add` is the same as calling
        // `game.currentScene.add`
        this.game.add(paddle);
        this.game.start();
    }

    public render() {
        return (
            <canvas width={this.props.width} 
                    height={this.props.height} 
                    className='ExcaliburContainer' 
                    id='excalibur-container'>
            </canvas>
        );
    }
}