import React from "react"

function childrenWithProps(props) {
    return React.Children.map(props.children, (child) =>{
        return React.cloneElement(
            child, {
                ...props,
                ...child.props
        }
    )
    
    })
}

const pai = props =>
    <div>
        <h1>{props.firstName} {props.lastName}</h1>
        <h2>Filhos</h2>
        <ul>
            {childrenWithProps(props)}
        </ul>

    </div>

export default pai
