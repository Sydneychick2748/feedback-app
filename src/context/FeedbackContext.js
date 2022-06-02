// this page is for ifr you have a big project , you wrap the routers and Routers etc in a const and use  the below import of createContext

import {createContext, usestate} from 'react';

const FeedbackContext = createContext();





export const FeedbackProvider = ({children})=>{
    const [feedback, setFeedback] = usestate([
        {
            id:1,
            text:'this item is  from context',
            rating: 10
        }
    ])

    return
        <FeedbackContext.Provider value={{feedback}}>
            {children}
        </FeedbackContext.Provider>
    

}
export default FeedbackContext;