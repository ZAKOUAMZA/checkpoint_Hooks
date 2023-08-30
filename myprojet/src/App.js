import React,{Component} from "react";
import "./App.css"
  class App extends Component{
    constructor(props){
      super(props);
      this.state={
        Person : { 
          fullName:"kuroko ",
           bio:"La rencontre avec kuroko le prince froid.",
          imgSrc:"https://i.pinimg.com/originals/a6/48/9b/a6489b13504113a080cba5b7f2309fea.png",
            profession:"Acteur Dessin Animé"
      },
        show:"false",
        Tempdepuismontage:0
      }
      this.IntervalTemp = null;
    }
 

    startTimer = () => {
      this.IntervalTemp = setInterval(() => {
        this.setState((statePrec) => ({
          Tempdepuismontage: statePrec.Tempdepuismontage + 1,
        }));
      }, 1000);
    };

    AficheMasque = () => {
      this.setState((statePrec) => ({
        show: !statePrec.show,
        Tempdepuismontage: 0, 
      }));
  
      if (!this.state.show) {
        this.startTimer(); 
      } else {
        clearInterval(this.IntervalTemp);
      }
    };


    componentWillUnmount(){
      clearInterval(this.IntervalTemp)
    }



    
  render() {
    return(
    <div className="App">
   <p style={{fontSize:'2em'}}>Temps depuis le montage : <strong style={{color:"red"}}>{this.state.Tempdepuismontage}</strong>  secondes</p>
   <button style={{padding:"10px",border:"none",borderRadius:"5px",color:"white",width:"10%",fontSize:'1.5em',cursor:"pointer",background:"green"}} onClick={this.AficheMasque}>Click Ici</button>

    {this.state.show &&(
    <div >

     <h1 style={{color:"red",fontSize:'3em'}}>{this.state.Person.fullName}</h1>
     <img style={{width:"250px"}} src={this.state.Person.imgSrc} alt=""/>
     <p style={{fontSize:'1.5em',color:"red"}}>{this.state.Person.bio}</p>
     <p style={{fontSize:'1em',color:"green"}}>{this.state.Person.profession}</p>
    </div>
    )}
</div>
    );
}
  }

export default App;

