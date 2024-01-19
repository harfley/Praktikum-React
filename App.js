import React, { Component } from  'react';
import './App.css';
// import Alert from './Components/Alert';
import Media from './Components/Media';

// class App extends Component {
//   render (){
//     return (
//       // <div className="App container">
//       //   <div className='alert alert-info'>
//       //   <h3 className='text-danger'> Ini Project Pertama React Js</h3>
//       //   <p> Belajar React Js itu mudah </p>
//       //   <button className='mr-1 btn btn-success'> Success </button>
//       //   <button className='btn btn-info'> Iya </button>
//       // </div>
//       // </div>
//       <div className='App container col-sm-6'>
//         <Alert type="danger">danger</Alert>
//         <Alert type="success">success</Alert>
//         <Alert type="warning">warning</Alert>
//       </div>
//     );
//   }
// }
// export default App;

class App extends Component {
  render(){
    return ( 
      <header>
      <div className='title'> PANCASILA </div>
      <div className='head-text'>
        <div className='text-on-image'>
          <strong> SILA PERTAMA </strong>
          <br></br>
          ketuhanan Yang Maha Esa
        </div>
        <Media image="gambar1.jpeg"></Media>
</div>

<div className='head-text'>
        <div className='text-on-image'>
          <strong> SILA KEDUA </strong>
          <br></br>
          Kemanusian yang adil dan beradap
        </div>
        <Media image="gambar2.jpeg"></Media>
</div>

<div className='head-text'>
        <div className='text-on-image'>
          <strong> SILA KETIGA </strong>
          <br></br>
          Persatuan indonesia
        </div>
        <Media image="gambar3.jpeg"></Media>
</div>

<div className='head-text'>
        <div className='text-on-image'>
          <strong> SILA KEEMPAT </strong>
          <br></br>
          kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan perwakilan
        </div>
        <Media image="gambar4.jpeg"></Media>
</div>

<div className='head-text'>
        <div className='text-on-image'>
          <strong> SILA KELIMA </strong>
          <br></br>
          keadilan sosial bagi seluruh rakyat indonesia
        </div>
        <Media image="gambar5.jpeg"></Media>
</div>
        </header>
    );
  }
}
export default App;
