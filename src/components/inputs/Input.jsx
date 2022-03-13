import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons'
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import './styles.scss'



const Input = (props) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const passwordType = () => {
    if (props.type === 'password') {
      // If eye is clicked return text, else return password
      if (passwordVisibility) {
        return 'text'
      } else {
        return 'password'
      }
    } else if (props.type) {
      return props.type
    }
    else {
      return 'text'
    }
  }

  return (
    <div className={props.isDisabled ? 'input-wrapper-disabled' : 'input-wrapper'}>
      <p className={"label"}>{props.label}</p>
      <input value={props.value ? props.value : ''}
             onChange={(e) => props.onChange(e.target.value)}
             placeholder={props.placeholder}
             type={passwordType()}
             disabled={props.isDisabled || false}
             onBlur={props.onBlur}
             className={props.icon ? 'input-icon' : null}
      />
      {props.error ?
          <p className={"error"}>{props.error}</p>
          : null
      }
      {props.type === 'password' ?
        <p className={'eye'}
          //onTouchStart={() => setPasswordVisibility(!passwordVisibility)}
           onClick={() => setPasswordVisibility(!passwordVisibility)}
        >{passwordVisibility ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
          {/* This div is used to cover the image and avoid the long press reaction of Chrome */}
          <span className={'eye-cache'} />
        </p> : null
      }
      {
        props.icon === 'email' ?
          <p className={'icon'}
            //onTouchStart={() => setPasswordVisibility(!passwordVisibility)}
             onClick={() => setPasswordVisibility(!passwordVisibility)}
          ><FontAwesomeIcon icon={faEnvelope} />
          </p> : null
      }
      {
        props.icon === 'user' ?
          <p className={'icon'}
            //onTouchStart={() => setPasswordVisibility(!passwordVisibility)}
             onClick={() => setPasswordVisibility(!passwordVisibility)}
          ><FontAwesomeIcon icon={faUser} />
          </p> : null
      }

    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  error: PropTypes.string,
  onBlur: PropTypes.func,
  icon: PropTypes.string
}

export default Input
