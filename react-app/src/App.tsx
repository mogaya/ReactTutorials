// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  // let items = ["Mogaya", "Mwita", "Boke", "Chacha", "Marwa"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Names"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>
    <div>
      <Alert>
        Hello World <span>Today</span>
      </Alert>
    </div>
  );
}

export default App;
