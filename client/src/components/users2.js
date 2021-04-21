// import React, { useState, useEffect } from 'react';
// import { DataGrid } from '@material-ui/data-grid';


// function User2() {

//     const [data, setData] = useState([])
//     const columns = [
//         { title: "ID", field: "_id" },
//         { title: "Username", field: "username" },
//         { title: "Firstname", field: "firstname" },
//         { title: "Lastname", field: "lastname" }

//     ]
//     // useEffect(() => {
//     //     fetch("/firstForward").then(res => {
//     //         if (res.ok) {
//     //             return res.json()
//     //         }
//     //     }).then(jsonRes => setData(jsonRes))
//     // })


//     return (
//         <React.Fragment>
//             <h1 align="center">React-App</h1>
//             <h4 align='center'>Material Table</h4>
//             <DataGrid
//                 title="Employee Data"
//                 data={data}
//                 columns={columns}
//             />
//         </React.Fragment>
//     );
// }

// export default User2;
