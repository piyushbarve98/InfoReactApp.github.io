import React, {Component} from 'react'

class AddAdmin extends Component{
    state = {
        name: null,
        age: null,
        work:null
    }
    
    handleChange = (e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    } 

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.addfunc(this.state);
    }
    render(){
        return(
            <div className='formDiv '>
                <form className='addForm card has-background-success-light' onSubmit={this.handleSubmit} >
                    <label htmlFor='name' className='button is-success mb-2 is-rounded'>Name</label>
                    <input type='text' id='name' className='input' placeholder='Name' onChange={this.handleChange}/>
                    <label htmlFor='age' className='button is-success mb-2 is-rounded' >Age</label>
                    <input type='number' id='age' className='input' placeholder='Age' onChange={this.handleChange}/>
                    <label htmlFor='work' className='button is-success mb-2 is-rounded' >Work</label>
                    <input type='text' id='work' className='input' placeholder='Work' onChange={this.handleChange}/>
                    <button type='submit' className='button ' >Add</button>
                </form>
            </div>
        );
    }
}

export default AddAdmin;