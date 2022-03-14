import './App.css';
import ListFromProps from './ListFromProps/ListFromProps';
import Counter from './Counter/Counter';
import AddDeleteList from './AddDeleteList/AddDeleteList';
import FetchData from './FetchData/FetchData';
import NavigationHeaderReducer from './NavigationHeader/NavigationHeaderReducer';
import NavigationHeaderContext from './NavigationHeader/NavigationHeaderContext';
import StarRating from './StarRating/StarRating';
import TicTacToe from './TicTacToe/TicTacToe';
import Pagination from './Pagination/Pagination';
import FilteredEmployeeList from './FilteredEmployeeList/FilteredEmployeeList';
import FormToTable from './FormToTable/FormToTable';
import Carousel from './Carousel/Carousel';
import FilterList from './FilterList/FilterList';

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
            {/*<NavigationHeaderContext />*/}
            {/*<StarRating />*/}
            {/*<TicTacToe />*/}
            {/*<Pagination />*/}
            {/*<FilteredEmployeeList />*/}
            {/*<FormToTable />*/}
            {/*<Carousel />*/}
            <FilterList />
        </div>
    );
}

export default App;
