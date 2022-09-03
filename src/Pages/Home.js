import React from 'react';
import Advantages from '../components/Advantages';
import Banner from '../components/Banner';
import Brands from '../components/Brands';
import Comments from '../components/Comments';
import Main from '../components/Main';
import Menu from '../components/Menu';
import Section from '../components/Section';

function Home(props) {
    return (
        <div>
            <Banner />
            <Menu />
            <Advantages />
            <Brands />
            <Comments />
            <Main />
            <Section />
        </div>
    );
}

export default Home;