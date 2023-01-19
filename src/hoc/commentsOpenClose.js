import React, { useCallback, useState } from "react"
export function commentsOpenComment(Component){
    return (props)=>{
        const [openComments,setOpenComments] = useState(false)
        const isShowComment = useCallback(()=>{
            return setOpenComments(prev => !prev)
        },[])
        return <Component {...{isShowComment,openComments,setOpenComments}} {...props}/>
    }
}


