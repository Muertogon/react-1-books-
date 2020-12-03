import React from 'react'

export default function Book() {
    return (
        <div className = "oneBook">
            <Image/>
            <Author/>
            <Title/>
            <Price/>
        </div> 
    )
}

const Image = () => <img src="androids.jpg" alt=""/>
const Author = () => <h1>Philip K. Dick</h1>
const Title = () => <h3>"Ar androidai svajoja apie elektrines avis?</h3>
const Price = () => <p> 8e</p>
