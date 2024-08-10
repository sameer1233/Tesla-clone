import NavItem from "./NavItem"
import {NavItemName} from '../../Data.jsx'
export default function Header(){
    // making the header components of the website
  return(
   <>
      <div className="tesla-log">
            <img src="images/logo.svg" alt="logo" />
      </div>
       
       {/* rendering the NavItem and name of the navItem are stored in the Data.jsx in the form of an array  */}
       {/* and redering them with the help of the map method */}
      <div className="NavList">
        <ul>
           {
            NavItemName.map((item) =>{
              return <NavItem navItem={item}/>
            })
           }
        </ul>
      </div>
   </>
  )
}