import './App.css';
import ListFromProps from './ListFromProps/ListFromProps';
import Counter from './Counter/Counter';
import AddDeleteList from './AddDeleteList/AddDeleteList';
import FetchData from './FetchData/FetchData';
import NavigationHeaderReducer from './NavigationHeader/NavigationHeaderReducer';
import NavigationHeaderContext from './NavigationHeader/NavigationHeaderContext';

function App() {
    return (
        <div className="App">
            {/*<ListFromProps />*/}
            {/*<Counter />*/}
            {/*<AddDeleteList />*/}
            {/*<FetchData />*/}
            {/*<Test />*/}
            {/*<Test2 />*/}
            {/*<NavigationHeaderReducer />*/}
            <NavigationHeaderContext />
        </div>
    );
}

export default App;
