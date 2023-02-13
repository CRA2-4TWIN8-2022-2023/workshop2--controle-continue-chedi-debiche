import logo from './logo.svg';
import './App.css';
import ComposantClass from './Components/ComposantClass';
import ComposantFunct from './Components/ComposantFunct';
import Product from './Components/Product';

// const option = (
//   <ol>
//     <li>TWIN</li>
//     <li>BI</li>
//     <li>SAE</li>

//   </ol>
// );

// let x="Bonjour";
// var y="tout"
// const z="le monde!"

// const expression = <p> 1 + 1 = { 1 + 1 } </p>

// var nom=<h2>chedi</h2>
// var prenom=<h2>debiche</h2>
// const photo = <img src="image.jpg" alt ="maPhoto" width="500px" height="500px"/>;

// const user={prenom:'chedi',nom:'debiche'};

// function formatName(user){
//   return user.prenom + '--' + user.nom;
// }


// var myStyle = {
//   fontSize:100,
//   color:'#FF0000'
// }


function App() {
  return (
    <div className="App">
      <ComposantClass/>
      <ComposantFunct/>
      <Product/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

{/* ATELIER 2

{option}

{x} {y} {z}

{expression}
<div style={myStyle}>{nom}</div>
<div style={myStyle}>{prenom}</div>
{photo}
<br></br>
<br></br>

Bonjour : {user.prenom}--{user.nom}

<br></br>

{formatName(user)} */}



    </div>
  );
}


export default App;
