import React from 'react'
import load from './load.gif'

export default function Spin() {
    return (
        <div className="text-center">
            <img src={load} alt="loading" />
        </div>
    )
}
