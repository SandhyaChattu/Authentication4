// Write your JS code here
import {Component} from 'react'
import Cookies from 'js-cookie'
class LogoutButton extends Component {
  removeCookie = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  render() {
    return (
      <div>
        <button onClick={this.removeCookie}>Logout</button>
      </div>
    )
  }
}

export default LogoutButton
