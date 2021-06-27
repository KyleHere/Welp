import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

import BusinessList from "./components/BusinessList";
import BusinessDetails from "./components/BusinessDetails"
import CreateNewBusiness from "./components/CreateBusinessForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
      <div className='pageContainer'>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/businesses">
            <BusinessList />
          </Route>
          <Route path="/businesses/:businessId">
            <BusinessDetails />
          </Route>
          {/* <Route path="/businesses/new-business">
            <CreateNewBusiness/>
          </Route> */}
        </Switch>
      )}
      </div>
  );
}

export default App;
