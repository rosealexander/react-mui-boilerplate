import {useContext} from 'react';
import {LayoutContext} from "./Page";


const PageNavigation = () => {

    const [layout] = useContext(LayoutContext)

    switch (layout) {
        case 'cashew':
            return null
        case 'hendrix':
            return null
        case 'nova':
            return null
        default:
            return null
    }
};

export default PageNavigation;
