import React             from 'react'
import { Route, Switch } from 'react-router-dom'

import Login   from '../Components/Login'
import Inbox   from '../Components/Inbox'
import Outbox  from '../Components/Outbox'
import Compose from '../Components/Compose'
import Logout from '../Components/Logout';

export default(
    <div>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/inbox" component={Inbox} />
            <Route path="/sent" component={Outbox} />
            <Route path="/compose" component={Compose} />
            <Route path="/logout" component={Logout} />
        </Switch>
    </div>
)