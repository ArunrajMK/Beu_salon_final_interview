
import React, { useState } from 'react'
import "./all.css"


function Employees() {

    
   

const employees = [{ "id": 1, "first_name": "Jaymee", "last_name": "Imm", "email": "jimm0@craigslist.org", "gender": "Genderqueer", "age": 80 },

    { "id": 2, "first_name": "Jody", "last_name": "Themann", "email": "jthemann1@skyrock.com", "gender": "Agender", "age": 29 },

    { "id": 3, "first_name": "Cece", "last_name": "Carlet", "email": "ccarlet2@jalbum.net", "gender": "Male", "age": 69 },

    { "id": 4, "first_name": "Elton", "last_name": "Allinson", "email": "eallinson3@jugem.jp", "gender": "Male", "age": 31 },

    { "id": 5, "first_name": "Garvy", "last_name": "Shaddick", "email": "gshaddick4@rediff.com", "gender": "Male", "age": 32 },

    { "id": 6, "first_name": "Fin", "last_name": "Realy", "email": "frealy5@unc.edu", "gender": "Male", "age": 26 },

    { "id": 7, "first_name": "Minnaminnie", "last_name": "Fransseni", "email": "mfransseni6@aboutads.info", "gender": "Agender", "age": 52 },

    { "id": 8, "first_name": "Fernando", "last_name": "Pagon", "email": "fpagon7@blogs.com", "gender": "Male", "age": 40 },

    { "id": 9, "first_name": "Tiphanie", "last_name": "Fenny", "email": "tfenny8@sakura.ne.jp", "gender": "Female", "age": 52 },
     { "id": 10, "first_name": "Nerti", "last_name": "Try", "email": "ntry9@shareasale.com", "gender": "Female", "age": 43 }, { "id": 11, "first_name": "Abagael", "last_name": "Beadell", "email": "abeadella@unc.edu", "gender": "Female", "age": 76 }, 
     { "id": 12, "first_name": "Morten", "last_name": "McNamee", "email": "mmcnameeb@sun.com", "gender": "Male", "age": 38 }, { "id": 13, "first_name": "Domenico", "last_name": "Shearman", "email": "dshearmanc@seesaa.net", "gender": "Male", "age": 66 },
      { "id": 14, "first_name": "Rodolphe", "last_name": "Bittlestone", "email": "rbittlestoned@51.la", "gender": "Male", "age": 33 }, { "id": 15, "first_name": "Merv", "last_name": "Watterson", "email": "mwattersone@storify.com", "gender": "Male", "age": 37 },
     { "id": 16, "first_name": "Betty", "last_name": "Simm", "email": "bsimmf@engadget.com", "gender": "Female", "age": 26 }]

     const [team, setTeam] = useState([])
   



let avg = team.reduce((acc, item) => {
        return acc + item.age / team.length
    }, 0) 

  



const handleAdd = (item2)=>{

let flag = false
for(let i=0; i<team.length; i++){
   if(team[i].id===item2.id){
    flag = true
   }
}
  if(!flag){
    setTeam([...team,item2])
  }  


    }

    






const handleRemove = (id)=>{
 
    let remove = team.filter((item)=>{
        return item.id !== id
      })
      setTeam(remove)

      console.log("remove")
}

const handleSort = ()=>{
    team.sort((a,b)=>{
       return a.age - b.age
   })
   
   let data = [...team]
   setTeam(data)
   
   }




  return (
        <div id="box">
            <div id="employee">
                {employees.map((item) => (
                    <div key={item.id} id="card">
                        <h4>{item.first_name}</h4>
                        <h5>{item.age}</h5>
                        <button onClick={()=>handleAdd(item)} >Add</button>
                    </div>
                ))}
            </div>

            <div id="team">
                <h1>Team</h1>
                <button onClick={handleSort}>sort by age</button>
                {team?.map((item) => (
                    <div id="teamIn">
                        <h4>{item.first_name}</h4>
                        <h5>{item.age}</h5>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                ))}
                <h4>Average:{avg}</h4>
            </div>
        </div>
    )
}

export default Employees