import React, { useState } from 'react'
export default function Registration() {

    class Student {
        constructor(givenName, givenLastName, givenEmail, givenPhoneNo) {
            this.name = givenName;
            this.lastName = givenLastName;
            this.Email = givenEmail;
            this.PhoneNo = givenPhoneNo;
        }

    }

    class Display {
        addStudent = (StudOBJ) => {
            let crdbody = document.getElementById('col2');
            let uiString = `
                <div class="card " >
                <div class="img">
                        <img src="./std.png" alt="" srcset="" />
                    </div>
                    <div class="info">
                        <h4>Student Name :  ${StudOBJ.name} ${StudOBJ.lastName}</h4>
                        <h4>       Email : <a href=${StudOBJ.Email}>${StudOBJ.Email}</a></h4>
                        <h4>   Phone No  : ${StudOBJ.PhoneNo}</h4>
                    </div>            
        `;

            crdbody.innerHTML += uiString;
            console.log(crdbody);

        }
    }

    // https://p7.hiclipart.com/preview/954/328/914/computer-icons-user-profile-avatar.jpg

    let [Name, SetName] = useState("");
    let [lastName, SetLastName] = useState("");
    let [Email, SetEmail] = useState("");
    let [PhoneNo, SetPhoneNo] = useState("");

    const Register = () => {
        let NewName = Name;
        let Newlast = lastName;
        let NewEmail = Email;
        let NewPhoneNo = PhoneNo;

        let StudOBJ = new Student(NewName, Newlast, NewEmail, NewPhoneNo)
        console.log(StudOBJ);
        let display = new Display()
        display.addStudent(StudOBJ);
        SetName("")
        SetLastName("")
        SetEmail("")
        SetPhoneNo("")

    }



    const OnChangeHandler = (e) => {
        SetName(e.target.value);

    }

    const OnChangeHandlerlastNme = (e) => {
        SetLastName(e.target.value);
    }

    const OnChangeHandlerEmail = (e) => {
        SetEmail(e.target.value);
    }

    const OnChangeHandlerPhoneNo = (e) => {
        SetPhoneNo(e.target.value);
    }

    return (
        <div className="row">
            <div className="col1">
                <div className="form">
               <form action="">
                        <h2>Registration</h2>
                        <hr />
                        <input type="text" value={Name} onChange={OnChangeHandler} placeholder="Enter Name" />
                        <input type="text" value={lastName} onChange={OnChangeHandlerlastNme} placeholder="Enter Lastname" />
                        <input type="text" value={Email} onChange={OnChangeHandlerEmail} placeholder="Enter Email" />
                        <input type="text" value={PhoneNo} onChange={OnChangeHandlerPhoneNo} placeholder="Enter Phone No" />
                        <button className='btn btn-danger' onClick={Register} type="button">Register</button>
                    </form>
                </div>
            </div>
            <div className="col2" id='col2'>
                <h2>Registered Students</h2>
                <hr />
               
            </div>

        </div>

    )
}
