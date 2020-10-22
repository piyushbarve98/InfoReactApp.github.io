import React ,{Component} from 'react';
import MyName from "./myName";
import AddAdmin from './form';
class App extends Component {
    state={
     allNames: [
      {name:'Piyush Barve', age:21 , work:'Student', id:1},
      {name:'Yoshi Master', age:31, work:'Designer',id:2},
      {name:'Ryu Ninja', age:26 , work:'Developer',id:3},
      {name:'Mark Maner', age:21 , work:'Content-Writer',id:4}
      ]
    }
    addfunc = (admin)=>{
      admin.id = Math.random()
      let allNames = [...this.state.allNames,admin]
      this.setState({
        allNames: allNames
      })
      // console.log(this.state)
    }

    deleteAdmin = (id)=>{
      let allNamesNew = this.state.allNames.filter(name=>{
        return name.id !== id
      })

      this.setState({
        allNames: allNamesNew
      }
      )
    }
  render(){
  return (
    <div >
        <h1 className='title is-size-2 pt-5 has-text-success'>All Admins</h1>
        <AddAdmin addfunc = {this.addfunc}/>
        
        <MyName  allNames = {this.state.allNames} deleteAdmin = {this.deleteAdmin} />
        
        
    </div>
  );
  }
}

export default App;
