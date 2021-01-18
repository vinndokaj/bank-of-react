//https://gist.github.com/ajLapid718/0a95c08420ea645735bac88113928f63
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import UserProfile from './Components/UserProfile';
import LogIn from './Components/Login';
import Debits from './Components/Debits';

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      debits : [{description:'poop', amount:123, date:"12-10-2021"}],
      credits : []
    }
    this.addCredit = this.addCredit.bind(this);
    this.addDebit = this.addDebit.bind(this);
  }

  addDebit = (debit) => {
    let newArr = [...this.state.debits];
    newArr.push(debit);
    this.setState({debits : newArr});
    this.setState({
      accountBalance : (this.state.accountBalance - debit.amount)
    });
  }

  addCredit = (credit) => {
    const newBalance = (this.state.accountBalance - credit);
    this.setState({accountBalance : newBalance});
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    const DebitComponent = () => (
    <Debits accountBalance={this.state.accountBalance} debits={this.state.debits} addDebit={this.addDebit}/>
    );

    return (
      <Router>
        <Switch>
            <Route exact path="/" component={HomeComponent}/>
            <Route exact path="/userProfile" component={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path='/debits' component={DebitComponent}/>
        </Switch>
      </Router> 
    );
  }
}

export default App;