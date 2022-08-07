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
                  address:"Kuizbari,Tangail sadar,Tangail",

              }
          };
          setDataa(result.data)
        }
        fetchData()
    },[]);

    return(
        <div>
            <h1><strong>Contact</strong></h1>
            <hr/>
            <h1><strong>Name :</strong> {data?.name}</h1>
            <h1><strong>Email :</strong> {data?.email}</h1>
            <h1><strong>Mobile :</strong> {data?.mob}</h1>
            <h1><strong>Address :</strong> {data?.address}</h1>
        </div>
    );
}