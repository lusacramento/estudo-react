const BomDia = props =>{
    return <h2>Bom dia {props.firstName} {props.lastName}!</h2>
}

const BoaTarde = props =>{
    return <h2>Boa tarde {props.name} {props.lastName}!</h2>
}

const BoaNoite = props =>{
    return <h2>Boa noite {props.name}!</h2>
}

export {BomDia, BoaTarde, BoaNoite}