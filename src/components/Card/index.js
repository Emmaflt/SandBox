import React from 'react' 
import styles from './Card.module.css'
// import Card from 'components/Card'
import { home } from "../data/cards.js";

import { useHistory } from 'react-router-dom'


// const Card = ({Img,Title,Description,Btn}) => {
//     const history = useHistory()


//   return (
//       <div className={styles.card}>
//           <div className={styles.card_body}>
//               <img src={Img} alt="" className={styles.card_img}/>
//               <h2 className={styles.card_title}> {Title}</h2>
//               <p className={styles.card_description}>{Description}</p>
//           </div>
//           {/* <button className={styles.card_btn}>{Btn}</button> */}
//           {/* <Link className={styles.card_btn} to="/manga-description">Acceder aux chapitres</Link> */}
//           <button className={styles.card_btn} onClick={()=> {history.push("/manga-description")}} type="button" />
//       </div>

//   )
// }

function Card() {
    const history = useHistory()
return (<Card className={styles.card}>
    { home.map(function (elt) { return <div className={styles.card_body}>
                <img className={styles.card_img} src={elt.img } alt="manga" />
                
                    <h2 className={styles.card_title}>{elt.title}</h2>
                    <p className={styles.card_description}>{elt.description}</p>

                    <button className={styles.card_btn} onClick={()=> {history.push("/manga-description")}} type="button" >{elt.btn}</button>
                
            </div>}) }
</Card>)
}


export default Card