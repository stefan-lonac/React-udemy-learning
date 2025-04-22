import { useInput } from '../hooks/useInput.js'
import { hasMinLength, isEmail, isNotEmpty } from '../util/validation.js'
import Input from './Input.jsx'

export default function Login() {
  const {
    value: emailValue,
    handInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value))

  const {
    value: passwordValue,
    handInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput('', (value) => hasMinLength(value, 6))

  function handleSubmit(event) {
    event.preventDefault()

    if (emailHasError || passwordHasError) {
      return
    }

    console.log('Sending')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && 'Please enter a valid email'}
        />

        <Input
          label="password"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordHasError && 'Please enter a valid password'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  )
}
