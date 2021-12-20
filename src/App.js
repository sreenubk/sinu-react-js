import
 React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';

import './App.css';
import { axios } from 'axios/dist/axios';

class App extends Component{
  state = {
    users:[],
   loading: false
  };
//   async componentDidMount(){

//     console.log(process.env.REACT_APP_CLIENT_ID)

//     this.setState({loading:true})
  
//   // await fetch('https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SCRET}')
//   //     .then(respose => respose.json())
//   //     .then(data => this.setState({users:data, loading:false}));
// const c = process.env.REACT_APP_CLIENT_ID;
// const c1 =process.env.REACT_APP_CLIENT_ID;
// let r = 'https://api.github.com/users?client_id=';
// r = r+c;
// r = r+'&'+'client_secret='+c1
// const req ='https://api.github.com/users?client_id=${c}&client_secret=${c1}'
// console.log(req)
//  const res = await fetch(r)
// //  console.log(res);
// res.json().then(data => this.setState({users:data, loading:false}));
// //  this.setState({users:res.json(), loading:false});
// }

searchUsers = async (text) =>{
  this.setState({loading:true})
  if(!(text === '')){
    const c = process.env.REACT_APP_CLIENT_ID;
  const c1 =process.env.REACT_APP_CLIENT_ID;
  let r = 'https://api.github.com/search/users?q='
  r = r+text;
  r = r+'&client_id=';
  r = r+c;
  r = r+'&'+'client_secret='+c1
  const res = await fetch(r)
  res.json().then(data => this.setState({users:data.items, loading:false}));

  //  axios.get(r).then(response => this.setState({users:response.data.items, loading:false})); 

  }

  
};
clearUsers = () =>{
  this.setState({users:[], loading:false})
}

  render(){
        
    return (
      <nav className="App">
        <Navbar/>
        <div className='container'>
        <Search 
        searchUsers={this.searchUsers} 
        clearUsers={this.clearUsers}
        showClear={this.state.users.length > 0 ? true : false}
        />   
        <Users loading={this.state.loading} users = {this.state.users} />
        </div>
      </nav>
    );
  }
}

export default App;
