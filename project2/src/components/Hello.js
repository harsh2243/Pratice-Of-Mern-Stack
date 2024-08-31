import React from "react";

const Hello =()=>{
    // return(
    //     <div>
    //         <h1>Hello viswas........</h1>
    //     </div>
    // )

    return React.createElement('div',null, React.createElement("h1",null,'hello viswas.......'))
}

export default Hello;