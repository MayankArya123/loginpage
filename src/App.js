//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <div className="first_half_container">
      <div className="form_container">
         <div className="logo_image">
             <span>icon</span>
         </div>
      <p className="paragraph"> Type in your password</p>
          <div className="form_group">
            <input placeholder="username" type="text"/>
          </div>
          <div className="form_group">
          <input placeholder="password" type="text" />
        </div>
        <button className="login_button">login</button>
      </div>
      
      </div>
    
       <div className="second_half_container">
         
       </div>
    </div>
  );
}

export default App;
