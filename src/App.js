//https://gist.github.com/ajLapid718/0a95c08420ea645735bac88113928f63
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import UserProfile from './Components/UserProfile';
import LogIn from './Components/Login';
import Debits from './Components/Debits';
import Credits from './Components/Credits';

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 0,//14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      debits : [],
      credits : []
    }
    this.addCredit = this.addCredit.bind(this);
    this.addDebit = this.addDebit.bind(this);
  }

  componentDidMount(){
    //adding credits from api
    fetch('https://moj-api.herokuapp.com/credits')
    .then(response => {
        if (response.status !== 200) {
        throw new Error("Problem fetching credits");
        }
        return response.json();
    })
    .then(creds => {
        for(let i = 0; i < creds.length; i++){
          this.addCredit(creds[i]);
        }
    })
    .catch(error => {
        console.log("error", error)
    });

    //adding debits from api
    fetch('https://moj-api.herokuapp.com/debits')
    .then(response => {
        if (response.status !== 200) {
        throw new Error("Problem fetching debits");
        }
        return response.json();
    })
    .then(debs => {
        for(let i = 0; i < debs.length; i++){
          this.addDebit(debs[i]);
        }
    })
    .catch(error => {
        console.log("error", error)
    });

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
    let newArr = [...this.state.credits];
    newArr.push(credit);
    this.setState({credits : newArr});
    this.setState({
      accountBalance : (this.state.accountBalance + + credit.amount)
    });
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
    const CreditComponent = () => (
      <Credits accountBalance={this.state.accountBalance} credits={this.state.credits} addCredit={this.addCredit}/>
    );

    return (
      <Router>
        <Switch>
            <Route exact path="/" component={HomeComponent}/>
            <Route exact path="/userProfile" component={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path='/debits' component={DebitComponent}/>
            <Route exact path='/credits' component={CreditComponent}/>
        </Switch>
      </Router> 
    );
  }
}

export default App;