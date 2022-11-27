import React, {useState} from "react";


const Login = () => {

    //Use to set state of the variable whenever some changes occur...
    //InitialState : Stores the initial value to be stored...
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Function to handle submit action of the form...
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email);
        console.log(password);
    }

    return (
        <>
            <form className={"auth-form-container"} onSubmit={handleSubmit}>

                {/*Adding the Email field in the form...*/}
                <label htmlFor={"email"}>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}  type={"email"}
                       placeholder={"youremail@gmsil.com"} id={"email"} name={"email"}/>

                {/*Adding the Email field in the form...*/}
                <label htmlFor={"password"}>Password</label>
                <input value={password} type={"password"} onChange={(e) => setPassword(e.target.value)}
                       placeholder={"**********"} id={"password"} name={"password"}/>

                {/*Adding the Login Button in the form...*/}
                <button type={"submit"}>Log In</button>

            </form>
        </>
    )
}

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [allEntry, setAllEntry] = useState([]);
//
// const submitForm = (e) => {
//     e.preventDefault();
//     const newEntry = {email: email, password: password};
//     setAllEntry([...allEntry, newEntry]);
//     console.log(allEntry)
// }
//
// return (
//     <>
//         <form action={""} onSubmit={submitForm}>
//
//             <div>
//                 {/*Adding the Email field in the form...*/}
//                 <label htmlFor={"email"}>Email</label>
//                 <input type={"text"} name={"email"} id={"email"} autoComplete={"off"} value={email}
//                        onChange={(e) => setEmail(e.target.value)}/>
//             </div>
//
//             <div>
//                 {/*Adding the Password field in the form...*/}
//                 <label htmlFor={"password"}>Password</label>
//                 <input type={"password"} name={"password"} id={"password"} autoComplete={"off"} value={password}
//                        onChange={(e) => setPassword(e.target.value)}/>
//             </div>
//             <button type={"submit"}>Login</button>
//         </form>
//         <div>
//             {
//                 allEntry.map((currElement) => {
//                     return (
//                         <div className={"showDataStyle"}>
//                             <p>{currElement.email}</p>
//                             <p>{currElement.password}</p>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     </>
// )


export default Login