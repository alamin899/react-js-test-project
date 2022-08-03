import {useEffect,useState} from "react";

export default function Contact() {
    const [data,setDataa] = useState(null);

    useEffect(()=>{
        const fetchData =() => {
          const result = {
              data:{
                  name:"Al-Amin",
                  email:"alamin@appnap.io",
                  mob:"01758845299",
                  bg:"AB+",

              }
          };
          setDataa(result.data)
        }
        fetchData()
    },[]);

    return(
        <div>
            <h1>Contact</h1>
            <hr/>
            <h1>Name : {data?.name}</h1>
            <h1>Mobile : {data?.mob}</h1>
            <h1>Blood Group : {data?.bg}</h1>
        </div>
    );
}