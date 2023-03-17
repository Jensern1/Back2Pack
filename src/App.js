import "./App.scss";
import React, { useContext } from "react";
import Auth from "pages/Auth";
import Home from "pages/Home";
import User from "pages/User";
import NotFound from "pages/NotFound/index.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "contexts/UserContext.js";

function App() {
  const { isLoggedIn } = useContext(UserContext);
  const { name } = useContext(UserContext);

  return (
    <Router>
      <div>
        <section>
          <Routes>
            {isLoggedIn === true ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<User />} />
                <Route path="/*" element={<NotFound />} />
              </>
            ) : (
              <>
                <Route path="/*" element={<Auth />} />
              </>
            )}
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
