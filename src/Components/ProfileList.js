import React, {Component} from 'react'
import Profile from './Profile'

class ProfileList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        profiles: []
        }
    this.eachProfile   = this.eachProfile.bind(this);
    this.update     = this.update.bind(this);
    this.delete     = this.delete.bind(this);
    this.nextID     = this.nextID.bind(this);

    }
    
    eachProfile (profile,i) {
    return (          
      <div key={'container'+i} className="card text-white bg-primary mb-3" style={{width: 18 + 'rem'}}>
        <div className="card-header">{profile.name.firstname}  {profile.name.lastname}  </div>
        <div className="card-body">
          <Profile key={'profile'+i} index={i} onChange={this.update}>
            <h5 className="card-title">{profile.name.firstname}  {profile.name.lastname}</h5>
            <p className="card-text">{profile._id}</p>
            <p className="card-text">{profile.age}</p>
            <p className="card-text">{profile.gender}</p>
            <p className="card-text">{profile.address}</p>
          </Profile>
        </div>
      </div>
      )
  }
    

    
    nextID() {
      this.uniqueId = this.uniqueId || 0
      return this.uniqueId++
  }
    
    update(newProfile, i) {
    this.setState(() => ({
      profiles: this.state.profiles.map(
        (profile) => (profile.id !== i) ? profile : {...profile, name: newProfile}
      )
    }))
  }   
    
  delete(id) {
  }
    
    componentDidMount() {
        const url =
            "https://dcs-ex1.herokuapp.com/getAllProfiles";
            fetch(url)
            .then((res) => {
                return res.json();
                })
            .then((data) => {
                var self=this;
                data.map((data) => {
                self.add(data.name.firstname, data.name.lastname, data._id, data.age,data.gender,data.address);     console.log(data);   
                })
            })
        }
    
    add(firstname,lastname,_id,age,gender,address) {
    
        this.setState(prevState => ({
      profiles: [
      ...prevState.profiles,
      {
          id: this.nextID(),
          name: {firstname, lastname },
          age: age,
          gender:gender,
          address:address
          
      }]
    }))

  }
    
    render() {
      return (
          <div className="profileList">
          {this.state.profiles.map(this.eachProfile)}
        </div>
      )
  }
}
export default ProfileList
