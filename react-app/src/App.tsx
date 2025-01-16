// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items = ["Mogaya", "Mwita", "Boke", "Chacha", "Marwa"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    // ListGroup

    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Names"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>

    //Alert

    // <div>
    //   <Alert>
    //     Hello World <span>Today</span>
    //   </Alert>
    // </div>

    // Button

    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
