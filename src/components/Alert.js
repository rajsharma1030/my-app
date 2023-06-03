import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div>
         <div className="alert alert-success alert-dismissible fade show text-center" role="alert">
                {props.alert}
                
            </div>
        </div>
    )
}
