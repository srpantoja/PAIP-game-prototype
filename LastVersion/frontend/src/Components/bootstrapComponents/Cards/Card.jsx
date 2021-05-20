import React from 'react'

function Card(props) {

    const opacity = () => {
      if(props.opacity) return 'card-opacity'
      return ''
    }
    return (
        <div className={`card text-${props.text} bg-${props.bg} ${opacity()}`}>
          {props.children}
        </div>
    )
}

export {Card}
