import { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {


// const user={
//     id:123,
//     email:'svetlana.stefanova@gmial.com',
//     name:'Svetlana'
// };
const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>

        { children }

    </UserContext.Provider>
  )
}
