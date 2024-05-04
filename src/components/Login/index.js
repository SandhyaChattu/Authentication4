// Write your JS code here
import Cookies from 'js-cookie'
import {Component} from 'react'
class Login extends Component {
  onSubmitSuccess = jwtToken => {
    const jwt = Cookies.set('jwt_token', jwtToken, {expires: 30})
  }

  makeApi = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const fetchedData = await fetch(url, options)
    console.log(fetchedData)
    const data = await fetchedData.json()
    if (fetchedData.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }
  render() {
    return (
      <div>
        <h1>Please Login</h1>
        <button type="button" onClick={this.makeApi}>
          Login with Simple Creds
        </button>
      </div>
    )
  }
}

export default Login
