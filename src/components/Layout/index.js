import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Home from '../Home';
import './index.scss';

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <Home />

            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>

                <Outlet />

                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                </span>
                <br />
                <span className='tags bottom-tag-html'>
                    &lt;/html&gt;
                </span>

            </div>
        </div>
        )
}

export default Layout;