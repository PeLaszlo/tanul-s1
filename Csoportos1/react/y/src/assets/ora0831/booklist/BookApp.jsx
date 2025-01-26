import BookList from "./BookList.jsx";
import CurrentChange from "./CurrentChange.jsx"
import CurrencyProvider from "./CurrencyProvider.jsx"
import InputField from "./InputField.jsx"

function BookShopApp() {
    return (<>
    <CurrencyProvider>
        <InputField/>
        <BookList  />
        <CurrentChange/>
    </CurrencyProvider>
    </>);
}

export default BookShopApp;