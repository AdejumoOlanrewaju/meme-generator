import React from "react"

export default function Header () {
    return (
        <div className = "header">
            <img src = {require("../images/Troll Face.png")} alt = "" className = "header-image"/>
            <h2 className = "header-title">Meme Generator</h2>
            <p className = "header-text">React Course - Project 3</p>
        </div>  
    )
}