import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser, updateUser } from '../../redux/reducers/UsersReduduser'
 
const User = ({name, text, id}) => {
  const [isUpdate, setIsUpdate] = useState(true)
  const [value, setValue] = useState({
    name: name,
    text: text,
    id: id
  })
  
  const getValues = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }
  const dispatch = useDispatch()


  const deleteuser = (id) => {
    dispatch(deleteUser(id))
  }

  const updateuser = (obj) => {
    setIsUpdate(!isUpdate)
    dispatch(updateUser(obj))
  }
  return ( 
    <>
      <div style={{border: '1px solid black', padding: "20px 100px"}}>
        {isUpdate 
          ? <h1>{name}</h1> 
          : <input type='text' onChange={getValues} name="name" /> 
        }
        {isUpdate
          ? <p>{text}</p>
          : <input type='text' onChange={getValues} name="text" /> 
        }
        <button onClick={() => deleteuser(id)}>Delete me</button>
        <button onClick={() => updateuser(value)} >Update me</button>
      </div>
    </>
   );
}
 
export default User;