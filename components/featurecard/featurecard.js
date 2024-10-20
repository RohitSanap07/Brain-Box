    import React from 'react'
    import './featurecard.css'
    function featurecard({featureimg , featuredescription}) {
      return (
        <div className='feature-card'>
        <img src={featureimg} className='feature-img'/>
        <p className='feature-text text-center'>{featuredescription}</p>
      </div>
      );
    }
    
    export default featurecard