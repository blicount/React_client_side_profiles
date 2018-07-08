import React from 'react';

//genrate profile card
const ProfileByIdList = ({ profiles, index }) => (
  <div>
   { profiles && profiles.map((profile, index) => 
       <div key={'container'+index} className="card text-white bg-primary mb-3" style={{width: 18 + 'rem'}}>
        <div className="card-header">{profile.name.firstname}  {profile.name.lastname}  </div>
         <div className="card-body">
          <div key={'profile'+index} index={index} >
              <h5 className="card-title">{profile.name.firstname}<br/>{profile.name.lastname}</h5>
              <p className="card-text">{profile._id}</p>
              <p className="card-text">{profile.age}</p>
              <p className="card-text">{profile.gender}</p>
              <p className="card-text">{profile.address}</p>
          </div>
        </div>
      </div>
    )}
  </div>
    
  );

export default ProfileByIdList;