import React from 'react'

export default function Header(props) {    
    return (
        <div className="header">
            
            <input type="checkbox"  onClick={props.changStatus}></input>
            <label htmlFor="vehicle1"> Enable Emoji Mode</label>
        </div>
    )
}
