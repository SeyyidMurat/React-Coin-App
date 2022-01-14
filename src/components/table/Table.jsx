import React from 'react'

const Table = (props) => {
    return (
        <>        
                <table className='table__wrapper'>
                    <thead>
                        <tr>
                                {
                                   props.tableHead && props.tableHead.map((item,index)=><th key={index}>{item}</th>)
                                }
                        </tr>
                    </thead>
                    <tbody>
                        {props.children}
                    </tbody>
                        
                    
                </table>
        </>
    )
}

export default Table
