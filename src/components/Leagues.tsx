import React from 'react'

import League from './League';

const Leagues = (props: any) => {
    return (
        <div className='leagues'>
            <div className='heading'>
                <h2>{props.title}</h2>
                {/* <div className='navitagor'>
                    <div className='left-button'><img src={left} /></div>
                    <div className='right-button'><img src={right} /></div>
                </div> */}
            </div>
            <div className='content'>
                {
                    props.data.map((item:any)=>(
                        <>
                            <League name={item.name} url={item.imgurl} />
                        </>
                        
                    ))
                }
                
            </div>

        </div>
    )
}


export default Leagues