// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  // let items = ["Mogaya", "Mwita", "Boke", "Chacha", "Marwa"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // const [alertVisible, setAlertVisibility] = useState(false);

  const [cartItems, setCartItems] = useState(["Prod1", "Prod2"]);
  const [expenses, setExpenses] = useState([
    { id: 1, description: "qqq", amount: 1000, category: "Utilities" },
    { id: 2, description: "www", amount: 1000, category: "Utilities" },
    { id: 3, description: "eee", amount: 1000, category: "Utilities" },
    { id: 4, description: "rrr", amount: 1000, category: "Utilities" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  if (expenses.length == 0) return null;

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

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

    // <>
    //   {alertVisible && (
    //     <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
    //   )}
    //   <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    //   <Like onClick={() => console.log("Liked")} />
    // </>

    // <>
    //   {alertVisible && (
    //     <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
    //   )}
    //   <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    //   <Like></Like>
    // </>

    // <div>
    //   <NavBar cartItemsCount={cartItems.length}></NavBar>
    //   <Cart onClear={() => setCartItems([])} cartItems={cartItems}></Cart>
    // </div>

    // <div>
    //   <Form></Form>
    // </div>

    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => {
            setSelectedCategory(category);
          }}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
