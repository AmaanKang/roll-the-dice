/**
 * I, Amandeep Kaur, student number 000822179, certify that this material is my original work. No other person's work has been used without due acknowledgment and 
 * I have not made my work available to anyone else.
 * 
 * This js file uses React to make changes to the html page.
 */
/**
 * Dice component represents a single piece of Dice
 */
class Dice extends React.Component{
    render(){
        return(
            <div className="aBox">
                <h3>{this.props.diceNumber}</h3>
            </div>
        );
    }
}
/**
 * Dice and Sides component holds most of the structure of page
 */
class DiceAndSides extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            diceCount : 1,
            sideCount : 6
        }
    }
    /**
     * Rolls the dice and displays the result by using dice with numbers displayed on them.
     * 
     */
    rollDice(){
        let randNum = Math.floor(Math.random() * (this.state.sideCount) + 1);
        let diceArray = [];
        let index = 0;
        let sum = 0;
        for(let i = 0; i < this.state.diceCount; i++){
            randNum = Math.floor(Math.random() * (this.state.sideCount) + 1);
            diceArray.push(randNum);
            sum += randNum;
        }
        let arrayElement = diceArray.map(e => 
           <li key={index++}>
                <Dice diceNumber={e}/>
            </li>
            
        );
        ReactDOM.render(
            <div>
                <div className="row">
                    <ul>{arrayElement}</ul>
                </div>
                <h3>Total Score: {sum}</h3>
            </div>,
            document.getElementById("container2")
        );
    }
    /**
     * When the up button of Number of Dice label is pressed, it increases the number of dice.
     */
    diceUpButton(){
        this.setState({
            diceCount : this.state.diceCount + 1
        });
    }
    /**
     * When the down button of Number of Dice label is pressed, it decreases the number of dice.
     */
    diceDownButton(){
        if(this.state.diceCount > 1){
            this.setState({
                diceCount : this.state.diceCount - 1
            });
        }
    }
    /**
     * When the up button of Number of Sides label is pressed, it increases the number of sides.
     */
    sideUpButton(){
        this.setState({
            sideCount : this.state.sideCount + 1
        });
    }
    /**
     * When the down button of Number of sides label is pressed, it decreases the number of sides.
     */
    sideDownButton(){
        if(this.state.sideCount > 2){
            this.setState({
                sideCount : this.state.sideCount - 1
            });
        }
    }
    /**
     * Renders the components on page
     * @returns visual presentation og game on page
     */
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <h3>Number of Dice: </h3>
                        </div>
                        <div className="row">
                            
                            <div className="col-md-6">
                                
                                <h2 className="anotherBox">{this.state.diceCount}</h2>
                            </div>
                            <div className="col-md-6">
                                <button className="aButton" onClick={this.diceUpButton.bind(this)}>Up</button>
                                <button className="aButton" onClick={this.diceDownButton.bind(this)}>Down</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <h3>Number of Sides: </h3>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                
                                <h2 className="anotherBox">{this.state.sideCount}</h2>
                            </div>
                            <div className="col-md-6">
                                <button className="aButton" onClick={this.sideUpButton.bind(this)}>Up</button>
                                <button className="aButton" onClick={this.sideDownButton.bind(this)}>Down</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="diceRoll">
                    <button className="aButton" onClick={this.rollDice.bind(this)}>Roll the Dice</button>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <div>
        <DiceAndSides />
    </div>,
    document.getElementById("container1")
);