import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Button';

class ComposantClass  extends Component {
    state = { monTexte:"hello 4TWIN8" ,valeur:'',value:0} 

    handleClick=()=>{
        this.setState({
            value:this.state.value +1
        })
    }

    render() { 
        return (<>ceci est un composant de classe :
        <h1>le contenu de mon texte est {this.state.monTexte}</h1>
        {/* <input type="button" onClick={()=>this.handleClick()} value="Incrémenter"/> */}
        <Button variant="danger" onClick={()=>this.handleClick()}>Incrémenter</Button>
        <h2>{this.state.value}</h2>
    

        
         </>);
    }



}
 
export default ComposantClass ;


//cc