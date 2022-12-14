import React from 'react'

import left from '../assets/icons/svg/left-black.svg';
import right from '../assets/icons/svg/right-dark.svg';
import League from './League';
import Product from './Product';

const List = (props: any) => {
    const handleClick = () => {
        console.log('clicked')
    }
    return (
        <div className='list'>
            <div className='heading'>
                <h2>{props.title}</h2>
                <div className='navitagor'>
                    <div className='left-button' onClick={handleClick}><img src={left} /></div>
                    <div className='right-button' onClick={handleClick}><img src={right} /></div>
                </div>
            </div>
            <div className='content'>
                {
                    props.type === 'product' ?
                        <>
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </> :
                        <>
                            {/* <League leagues={props.data}/> */}
                            <League leagues={props.data} />
                            <League leagues={props.data} />
                            <League leagues={props.data} />
                            <League leagues={props.data} />

                        </>
                }
            </div>

        </div>
    )
}

export default List