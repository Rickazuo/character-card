'use client';
import {useState} from "react"
import styles from './page.module.css'
import Card from './components/card/card'
import OverlayCard from "./components/overlayedCard/overlayedCard";

// const info = [{
//  index: 0,
//  img: ,
//  name: "test",
//  description: "test",
//  movie: "test",
//  species: "test",
//  hight: "test",
//  location: "test",
//  weapons: "test",
// }]

export default function Home() {
  // const [order, setOrder] = useState([0, 1 , 2])
  return (
    <main className={styles.main}>
      <OverlayCard name="Finn" className={styles.containerLeft}/>
      <Card />
      <OverlayCard name="BB-8" className={styles.containerRight} />
    </main>
  )
}
