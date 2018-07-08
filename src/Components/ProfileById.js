import React, { Component } from 'react'
import ProfileByIdList from './ProfileByIdList'
import ReactDOM from 'react-dom'


class ProfileById extends Component {
    constructor(props) {
        super(props)
        this.state = {newId:0}

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleIdChange=this.handleIdChange.bind(this);
    }

 handleSubmit(event){
        event.preventDefault();
        let newId = this.state.newId;
        (async () => {
             const rawResponse = await fetch(`https://dcs-ex1.herokuapp.com/getProfileByID/${newId}`, 
                {
                 
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
             body: JSON.stringify({_id:newId})      
             });
                {
                const content = await rawResponse.json();
                ReactDOM.render(<ProfileByIdList profiles={content} />
                , document.getElementById("response"))
                }
        })();
    }
   
    handleIdChange(event){
        this.setState({newId: event.target.value})
  }

    render() {
        return (

            <div>
                <form action="https://dcs-ex1.herokuapp.com/getProfileByID/" method="POST" onSubmit={this.handleSubmit}>
                  <label>
                    <p> Data Exmaple</p>
                    ID=1111 <br/>
                    ID=2222 and so...<br/><br/>
                    ID:
                   <input onChange={this.handleIdChange} value={this.state.newId} type="text" name="rank" />       </label>
                  <input type="submit" value="Send" />
                </form>
                <div id="response">
                </div>
            </div>
        )
    }
}
export default ProfileById