import App from '../App/App';
import AppPageItem from '../AppPageItem/AppPageItem';
import { useLoaderData } from 'react-router';
const AppPage = () => {
     const data = useLoaderData()
    return (
        <div>
            <AppPageItem data={data}></AppPageItem>
        </div>
    );
};

export default AppPage;