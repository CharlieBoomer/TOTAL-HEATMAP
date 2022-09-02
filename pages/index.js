import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({result}) {
  return (
    <div className={styles.container}>
      <table className='border'>
        <thead>
          <tr>
            <th>Faction</th>
          {result.data.map((faction)=>{
          return <th key={faction.id} className='p-2 border'>{faction.attributes.name}</th>
        })}   
        {console.log(result)}
        {console.log(result.atrributes)}
            </tr>
        </thead>
        <tbody className='ml-5 border'>
          {result.data.map((faction)=>{
          return <tr className='border' key={faction.id}>
              <td className='border'>{faction.attributes.name}</td>
              {/* {result.data.map((faction2)=>{
                return <td className='border'>{faction2.atrributes.name}</td> //Fix this such that we can output the win/loss percentage is displayed by the fucking browser. 
              })} */}
            </tr>
        })}   
          
        </tbody>
      </table>
    </div>
  );
};

export async function getServerSideProps(context) {
 
   let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  const res = await fetch("https://api.totaltavern.com/api/factions?populate\"%\"5B\"%\"5D=avataricons&populate\"%\"5B\"%\"5D=avataricons.avatar\" -H \"User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0\" -H \"Accept: */*\" -H \"Accept-Language: en-US,en;q=0.5\" -H \"Accept-Encoding: gzip, deflate, br\" -H \"Referer: https://www.totaltavern.com/\" -H \"Origin: https://www.totaltavern.com\" -H \"DNT: 1\" -H \"Connection: keep-alive\" -H \"Sec-Fetch-Dest: empty\" -H \"Sec-Fetch-Mode: cors\" -H \"Sec-Fetch-Site: same-site", requestOptions)
  const result = await res.json()

  if (!result) {
    return {
      notFound: true,
    }
  }

  return {
    props: { result }, // will be passed to the page component as props
  }
}


