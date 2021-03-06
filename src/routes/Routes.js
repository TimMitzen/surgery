import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Drives from "../components/Drives";
import Ricoh from "../components/Ricoh";
import Imaging from "../components/Imaging";
import VideoConf from "../components/VideoConf";
import Instructions from "../components/Instructions";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/drives" component={Drives} />
      <Route path="/imaging" component={Imaging} />
      <Route path="/ricoh" component={Ricoh} />
      <Route path="/video" component={VideoConf} />
      <Route path="/instructions" component={Instructions}/>
    </Switch>
  );
};

export default Routes;
