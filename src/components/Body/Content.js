import React from 'react'
import Element from './Element'

export default function Content(props) {


    return (
        <div>

            {/* <p>In a typical <span style={{ display: props.checkStatus ? 'none' : '' }}>React </span>
                <img src="https://img.icons8.com/nolan/24/react-native.png" style={{ display: props.checkStatus ? '' : 'none' }} alt="" />
                application, data is passed <span style={{ display: props.checkStatus ? 'none' : '' }}> top </span>
                <img src="https://img.icons8.com/nolan/24/up.png" style={{ display: props.checkStatus ? '' : 'none' }} alt="" />-
                <span style={{ display: props.checkStatus ? 'none' : '' }}> down</span>
                <img src="https://img.icons8.com/nolan/24/down.png" style={{ display: props.checkStatus ? '' : 'none' }} alt="" /> (
                    <span style={{ display: props.checkStatus ? 'none' : '' }}> parent</span>
                <img src="https://img.icons8.com/color/24/000000/family-two-women.png" style={{ display: props.checkStatus ? '' : 'none' }} alt="" /> to
                    <span style={{ display: props.checkStatus ? 'none' : '' }}> child</span>
                <img src="https://img.icons8.com/emoji/24/000000/child-emoji.png" style={{ display: props.checkStatus ? '' : 'none' }} alt="" />
                ) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI
                <span style={{ display: props.checkStatus ? 'none' : '' }}> theme</span>
                <img src="https://img.icons8.com/color/24/000000/paint-palette.png" style={{ display: props.checkStatus ? '' : 'none' }} alt="" />
                ) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the
                <span style={{ display: props.checkStatus ? 'none' : '' }}> tree</span>
                <img src="https://img.icons8.com/color/24/000000/deciduous-tree.png" style={{ display: props.checkStatus ? '' : 'none' }} alt="" />
            </p> */}
            <p>
                In a typical {props.checkStatus ? <Element item={Text} params={{ text: 'React' }} /> : <Element item={Image} params={{ url: 'https://img.icons8.com/nolan/24/react-native.png' }} />}   application, data is passed top -down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are  required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the {props.checkStatus ? <Element item={Text} params={{ text: 'tree' }} /> : <Element item={Image} params={{ url: 'https://img.icons8.com/color/24/000000/deciduous-tree.png' }} />}.
            </p>
        </div>
    )
}


//<img src={props.url} alt="" />=><img src={props.url} alt="" />
function Image(props) {
    return (
        <img src={props.url} alt="" />
    )
}
const Text = (props) => {
    return <span>{props.text}</span>
}