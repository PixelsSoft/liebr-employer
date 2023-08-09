import React, { Fragment } from 'react'
import Header from '../components/header/Header'


export default function PageLayout( props ) {
    return (
        <Fragment>
            <Header />
            <div
                className='d-flex bg-secondary-subtle'
                style={{ height: "92vh" }}>
                {props.children}

            </div>
        </Fragment>
    )
}
