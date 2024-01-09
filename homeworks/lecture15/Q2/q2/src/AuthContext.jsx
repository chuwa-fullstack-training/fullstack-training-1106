import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [cards, setCards] = useState([
        { name : "First", color : "white" },
        { name : "Second", color : "white" },
        { name : "Third", color : "white" },
        { name : "Fourth", color : "white" },
        { name : "Fifth", color : "white" },
        { name : "Sixth", color : "white" }
      ]);
    
    const [colorChoosed, setColorChoosed] = useState("");
    
    const [selectedCard, setSelectedCard] = useState(null);

    return (
        <AuthContext.Provider value={{ 
            cards, 
            setCards,
            colorChoosed, 
            setColorChoosed,
            selectedCard, 
            setSelectedCard
        }}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};