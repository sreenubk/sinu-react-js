import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
    state = {
        text : ''
    };

    static propTypes ={
        searchUsers : PropTypes.func.isRequired,
        clearUsers:  PropTypes.func.isRequired
    }

    
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text:''})
    }

    onChange = e =>{
       
        this.setState({ text: e.target.value } );
    };
    
    render() {
        console.log(this.props.showClear);
        return (
            
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input type="text" name="text" 
                    placeholder='Search...' 
                    value={this.state.text}
                    onChange={this.onChange}/>
                    <input type="submit" 
                    value="Search" 
                    className='btn btn-dark btn-block'/>
                    
                </form>
                {this.props.showClear && <button className='bts btn-light btn-block' onClick={this.props.clearUsers}>Clear</button>}
                
                
            </div>
        )
    }
}
