
import { useEffect } from 'react';
import Highlights from './../components/Home-component/Highlights';
import HomeLayout from './../layouts/HomeLayout';

const Home: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <HomeLayout >


            <Highlights />

        </HomeLayout >
    );
};

export default Home;
