import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddUsers } from "../../redux/reducers/UsersReduduser";

function Form() {
  const [value, setValue] = useState({
    name: '',
    text: '',
    id: Date.now()
  })
  const dispatch = useDispatch()
  
  const getValues = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const submit = (e) => {
    e.preventDefault()
    dispatch(AddUsers(value))
  }
  
  return ( 
    <>
      <div>
        <input type="text" name='name' onChange={getValues} />
        <textarea name="text" cols="30" rows="10" onChange={getValues} ></textarea>
        <button onClick={submit}>save</button>
      </div>
    </>
   );
}

export default Form;