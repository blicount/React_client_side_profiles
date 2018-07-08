import React, { Component } from 'react'
import ProfileByIdList from './ProfileByIdList'
import ReactDOM from 'react-dom'

class ProfileByGenderAge extends Component {
    constructor(props) {
        super(props)
        this.state = {newGender:'', newAge:0};

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleGenderChange=this.handleGenderChange.bind(this);   
        this.handleAgeChange=this.handleAgeChange.bind(this);
    }

     handleAgeChange(event){
        this.setState({newAge: event.target.value})
     
     }

     handleGenderChange(event){
        this.setState({newGender: event.target.value})
     
     }

    handleSubmit(event){
        event.preventDefault();
        let newAge = this.state.newAge;
        let newGender = this.state.newGender;
        (async () => {
          const rawResponse = await fetch(`https://dcs-ex1.herokuapp.com/getProfileByGenderAndAge/${newGender}/${newAge}`, 
            {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({gender:newGender,age:newAge})
          });
            const content = await rawResponse.json();
                ReactDOM.render(<ProfileByIdList profiles={content} />
                , document.getElementById("response"))
        })();
    }

    render() {
        return (
            <div>
                <form action="cs-ex1.herokuapp.com/getProfileByGenderAndAge/" method="POST" onSubmit={this.handleSubmit}>
                    <label>
                    Data Exmaple <br/>
                    Age = 24, Gender = male<br/>
                    Age = 34, Gender = female<br/><br/>
                        Age:
                        <input onChange={this.handleAgeChange} value={this.state.newAge} type="text" name="age" />
                      </label><br/>
                    <label>
                        Gender:
                        <label>    
                            <input onChange={this.handleGenderChange} type="radio" name="gender" value="male" checked={this.state.newGender==='male'}/>
                            Male
                        </label>
                        <label>
                            <input onChange={this.handleGenderChange} type="radio" name="gender" value="female" checked={this.state.newGender==='female'}/> 
                            Female
                        </label>
                      </label><br/>
                    <input type="submit" value="Send" />
                </form>
                <div id="response">
                </div>
            </div>
        )
    }
}
export default ProfileByGenderAge