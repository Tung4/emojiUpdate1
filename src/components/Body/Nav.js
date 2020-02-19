import React from 'react'

export default function Nav(props) {
    return (
            <nav>
                <a href="/">Home
                <img src="https://img.icons8.com/doodle/24/000000/home.png" alt="" style={{ display: props.checkStatus ? '' : 'none' }} />
                </a>
                <a href="/">Blog
                <img src="https://img.icons8.com/color/24/000000/blogger.png" alt=""
                        style={{ display: props.checkStatus ? '' : 'none' }}></img>
                </a>
                <a href="/">Github
                <img src="https://img.icons8.com/nolan/24/github.png" alt=""
                        style={{ display: props.checkStatus ? '' : 'none' }}></img>
                </a>
                <a href="/">Instagram
                <img src="https://img.icons8.com/cute-clipart/24/000000/instagram-new.png" alt=""
                        style={{ display: props.checkStatus ? '' : 'none' }}></img>
                </a>
            </nav>
        
    )
}
