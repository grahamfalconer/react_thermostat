import React from 'react';
const minimumTemperature = 10

export class Thermostat extends React.Component { 

    constructor(){
        super()
        this.state = {
            temperature: 20,
            powerSaver: true
        }
    }

    render(){ 
        const powerSavingString = this.state.powerSaver ? "On" : "Off"

        const lowPowerColour = "blue"
        const highPowerColour = "red"
        let currentColour = "green"

        if (this.state.temperature < 18) currentColour = lowPowerColour
        if (this.state.temperature > 25) currentColour = highPowerColour

      return( //style={{color: "red"}}>Hello Style!</h1>
        <div>
            <h1 style={{color: currentColour}}> {this.state.temperature} </h1>
            <button type="button" onClick={this.temperatureUp}> Temp up </button>
            <button type="button" onClick={this.temperatureDown}> Temp down</button>
            <button type="button" onClick={this.togglePowerSaver}>Power Saving: {powerSavingString} </button>
        </div>
      )
    }

    temperatureDown = () => {
        if(this.state.temperature > minimumTemperature) {
            this.setState({
                temperature : this.state.temperature - 1 
            })
      }
    }

    temperatureUp = () => {
        this.setState({
            temperature : this.state.temperature + 1
        })
    }

    togglePowerSaver = () => {
        this.setState({
            powerSaver: !this.state.powerSaver
        })
    }
}

export default Thermostat