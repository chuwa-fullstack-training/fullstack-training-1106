import React, { useState } from "react";

const TreeView = ({ data }) => {
  const [openItems, setOpenItems] = useState({});

  const toggleOpen = (itemId) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [itemId]: !prevOpenItems[itemId]
      
    }));
   
  };

  const isItemOpen = (itemId) => 
   openItems[itemId];
  
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <div onClick={() => toggleOpen(item.id)}>
            {item.name}
          </div>
          {item.children && isItemOpen(item.id) && <TreeView data={item.children} />}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const backendData = [
    { id: "1", name: "Office Map" },
    {
      id: "2",
      name: "New Employee Onboarding",
      children: [
        { id: "8", name: "Onboarding Materials" },
        { id: "9", name: "Training" },
      ],
    },
    {
      id: "3",
      name: "Office Events",
      children: [
        {
          id: "6",
          name: "2018",
          children: [
            { id: "10", name: "Summer Picnic" },
            { id: "11", name: "Valentine's Day Party" },
            { id: "12", name: "New Year's Party" },
          ],
        },
        {
          id: "7",
          name: "2017",
          children: [{ id: "13", name: "Company Anniversary Celebration" }],
        },
      ],
    },
    { id: "4", name: "Public Holidays" },
    { id: "5", name: "Vacations and Sick Leaves" },
  ];

  return (
    <div>
      <h1>Tree View</h1>
      <TreeView data={backendData} />
    </div>
  );
};

export default App;
