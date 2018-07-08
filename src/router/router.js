import React from "react";
import { Route } from "react-router-dom";
import ProfileList from "../Components/ProfileList";
import ProfileById from "../Components/ProfileById";
import ProfileByGenderAge from "../Components/ProfileByGenderAge";
import Header from "../Header";

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header/>
            <Route exact path="/2017-2018/dcs/dev_40/client_app/" component={ProfileList} />
            <Route path="/2017-2018/dcs/dev_40/client_app/ProfileById" component={ProfileById} />
            <Route path="/2017-2018/dcs/dev_40/client_app/ProfileByGenderAge" component={ProfileByGenderAge} />
        </React.Fragment>
    );}

export default ReactRouter;