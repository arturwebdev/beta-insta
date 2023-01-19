import React, { memo } from 'react'

function MassengerChatContinue({...massege}) {

    function check(){
        switch (massege.info) {
            case "barev":
                return "barev"
            case "vonc es?":
                return "lav du vonc es?"
            case "lav":
                return "inch ka ba ursih?"
            default:
                return "chaskaca"
        }
    }

  return (
  <>
     <div className='userMassege'>
        <h2 >{massege.info}</h2>
    </div>
    <div className='botMassege'>
        <h2 className='botMassege'>{check()}</h2>
    </div>
  </>
  )
}

export default memo(MassengerChatContinue)