import React, { Component, Suspense } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import '../../node_modules/font-awesome/scss/font-awesome.scss';

import Loader from './layout/Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import routes from "../route";
import { connect } from "react-redux";

const AdminLayout = Loadable({
    loader: () => import('./layout/AdminLayout'),
    loading: Loader
});

class App extends Component {
    render() {
        const SignIn = React.lazy(() => import('../views/Authentication/SignIn.js'));
        const NotFound = ()=>
            (
                <div>
                  <h1>404 - Not Found!</h1>
                 
                </div>
              )
        
        return (
            <Aux>
                {/* <ScrollToTop> */}
                    <Router>
                        <Suspense fallback={<Loader />}>
                            <Switch>
                                {
                                    this.props.token ?
                                        < Route path="/" component={AdminLayout} /> :
                                        <>
                                            <Route path="/login" component={SignIn} />
                                       
                                            <Route exact path="/" render={() => (<Redirect from="*" to="/login" />)} />
                                                 {/* <Route component={NotFound} /> */}
                                        </>
                                }
                            </Switch>
                        </Suspense>
                    </Router>
                {/* </ScrollToTop> */}
            </Aux>
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.auth
    }
}

export default connect(mapStateToProps)(App);
