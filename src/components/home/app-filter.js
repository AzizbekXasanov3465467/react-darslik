import React  from "react";

import { Component } from "react";

const h1one  = new String('Hello React')
class HomeOne extends Component{
    render() {

        return(
            <div className="1-blog">
                <div className="2-blog">
                    <div className="3-blog">
                       <h1>{h1one}</h1>
                       <ul>
                        <li>
                            
                        </li>
                       </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomeOne