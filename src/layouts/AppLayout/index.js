import { NavSearch } from '../../components/molecules';
import PropTypes from 'prop-types';

const AppLayout = ({children}) => {
    return ( 
        <div className="app-layout">
            <NavSearch/>
            <div className="content">
                {children}
            </div>
        </div>
    );
}

AppLayout.propTypes = {
    children: PropTypes.node
}
export default AppLayout;