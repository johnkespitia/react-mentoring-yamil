import React from "react";
const Nav = ({variant, size})=> {
    return <h1 style={{
        color: variant,
        fontSize: `${size}px`
    }}>NavBar</h1>
}
export default Nav;