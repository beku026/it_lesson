import { useSelector } from "react-redux";
import User from "../User/User";

function Users() {
  const users = useSelector(state => state.user.users)
  console.log(users)
  return ( 
    <>
      <div>
        {
          users?.map(item => (
            <>
              <User key={item.id} {...item} />
            </>
          ))
        }
      </div>
    </>
   );
}

export default Users;