import React from 'react';

export default function Element(props) {
    // console.log(props.item);
    // console.log(props.params);
    
    const Item = props.item;
    const params = props.params;
    return (
        <Item {...params}></Item>
    )
}
