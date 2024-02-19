import HomeCalendar from './Calendar';
import HomeStatus from './Status';
import HomeTodo from './Todo';
import './index.css'

function HomeSidebar() {
    return ( 
    <div className="wd-courses-home-sidebar d-none d-lg-block">
        <HomeStatus />
        <HomeTodo />
        <HomeCalendar />
    </div> );
}

export default HomeSidebar;