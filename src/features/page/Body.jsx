import {useContext} from 'react';
import {LayoutContext} from "./Page";

const Body = () => {
    const [layout] = useContext(LayoutContext)
    switch (layout) {
        case 'cashew':
            return 'Cashew'
        case 'hendrix':
            return 'Hendrix'
        case 'nova':
            return 'Nova'
        default:
            return null
    }
};

export default Body;
