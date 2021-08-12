import { Switch } from 'react-router-dom';
import Route from './route'

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Habits from '../pages/Habits';
import Groups from '../pages/Groups';


const Routes = () => {

    return (
        <Switch>

            <Route 
                exact path='/home'
                component={Home} />

            <Route 
                exact path='/signup'
                component={SignUp} />
            
            <Route 
                exact path='/login'
                component={Login}/>

            <Route 
                exact path='/habits'
                component={Habits}/>
            
            <Route
                exact path='/Groups'
                component={Groups}/>

                
        </Switch>
    )
}

export default Routes

