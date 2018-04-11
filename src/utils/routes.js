import React             from 'react'
import { Route, Switch } from 'react-router-dom'

import Login   from '../components/Login'
import Inbox   from '../components/Inbox'
import Outbox  from '../components/Outbox'
import Compose from '../components/Compose'
import Logout from '../components/Logout';

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