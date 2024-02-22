import { Component } from "react";
import Appfilter from '../app-filter/app-filter'
import Appinfo from '../app-info/app-info'
import Moveaddfrom from '../move-add-from/move-add-form'
import Movelist from '../move-list/move-list'
import Movelistitem from '../move-list-item/move-list-item'
import Seepanel from '../search-panel/search-panel'

class App extends Component {
 
    render() {
        return(
            <div>
               <Appfilter />
               <Appinfo />
               <Moveaddfrom />
               <Movelistitem />
               <Movelist />
               <Seepanel />
           
            </div>
        )
    }
}
export default App