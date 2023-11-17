import Image from 'next/image'
import styles from './Header.module.css'
const Header = () => {
    return(
    <header className={styles.header}>
        <Image src='/images/logo.png' width={120} height={31} alt='logo'/>
    </header>)
}

export default Header