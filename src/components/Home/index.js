import Avatar from '../../assets/images/avatar.jpg'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = ()=>{
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={Avatar} alt='developer'></img>
                Tomasz Izdebski<br />
                web developer
                </h1>
                <h2>Frontend Developer / Javascript / React</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</ Link>
            </div>
        </div>
    )
}

export default Home;