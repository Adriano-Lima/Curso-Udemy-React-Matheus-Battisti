import styles from './ShowCarDetails.module.css'

const ShowCarDetails = ( { car }) => {
  return (
    <div className={styles.card}>
        <h1>{car.modelo}</h1>
        <h2>Marca: {car.marca}</h2>
        <h2>Ano:{car.ano}</h2>
        
    </div>
  )
}

export default ShowCarDetails