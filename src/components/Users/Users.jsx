import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import s from "./users.module.css"
import {useState} from "react";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    const {searchTerm, setSearchTerm} = useState("")
    return <div>
    <div>
        <input type="text" placeholder="Search..." onChange={event =>{setSearchTerm(event.target.value)}}/>
            {
                users.map(u => <User user={u}
                                     followingInProgress={props.followingInProgress}
                                     key={u.id}
                                     unfollow={props.unfollow}
                                     follow={props.follow}
                />)
            }
        </div>
        <div className={s.paginator}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        </div>
    </div>

}

/*return <div>
    <input type="text" placeholder="Search..."/>
    {/!*{users.map((val, key)=>{}*!/}
    return <div>
    {
        users.map(u => <User user={u}
                             followingInProgress={props.followingInProgress}
                             key={u.id}
                             unfollow={props.unfollow}
                             follow={props.follow}
        />)
    }
</div>
    <div className={s.paginator}>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
    </div>
</div>

}*/

export default Users;