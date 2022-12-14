import React, { Component } from "react"

export default class Saudacao extends Component {
    state = {
        type: this.props.type,
        name: this.props.name,
    }
    
    constructor(props) {
        super(props)

        this.setType = this.setType.bind(this)
        this.setName = this.setName.bind(this)

    }

    setType(e) {
        this.setState({ type: e.target.value})
    }

    setName(e) {
        this.setState({name: e.target.value})
    }

    render(){
        const { type, name } = this.state
        return (
            <div>
                <h3>{type} {name}!</h3>
                <br />
                <input 
                    type="text" 
                    placeholder="Tipo..." 
                    value={type} 
                    onChange={this.setType}
                />
                <input 
                    type="text" 
                    placeholder="Nome..." 
                    value={name}
                    onChange={this.setName}
                    />
            </div>
        )
    }
}