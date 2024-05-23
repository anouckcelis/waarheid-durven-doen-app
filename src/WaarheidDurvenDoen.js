import React, { useState, useEffect } from 'react';
import './Algemeen.css'; // Importeer CSS-styling
import logo from './images/logospotgroup.png'; // Importeer Logo-afbeelding
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Importeer Pijl-icoon componenten
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore'; // Importeer Firestore-functies
import firebase from './firebase.js'; // Importeer Firebase-configuratie

const WaarheidDurvenDoen = () => {
  // State Hooks om de staat van de component bij te houden
    // Array van categorieën
  const [categories, setCategories] = useState([]);
    // Geselecteerde categorie
  const [selectedCategory, setSelectedCategory] = useState(null);
    // Geselecteerd type vraag
  const [selectedType, setSelectedType] = useState(null);
    // Huidige vraag
  const [currentQuestion, setCurrentQuestion] = useState('');
    // Vorige vraag
  const [previousQuestion, setPreviousQuestion] = useState(''); 

  // Effect Hook om de categorieën uit de Firestore-database op te halen
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Firestore-instantie
        const db = getFirestore();
        // Verwijzing naar de 'categories' collectie
        const categoriesRef = collection(db, 'categories'); 
        // Query naar alle categorieën
        const categoriesSnapshot = await getDocs(categoriesRef); 
        const categoriesData = categoriesSnapshot.docs.map(doc => {
          const categoryData = doc.data();
          return { ...categoryData, id: doc.id }; // Voeg een unieke id toe aan elke categorie
        }); // Gegevens van alle categorieën
        setCategories(categoriesData); // Zet categorieën in de state
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    // Haal categorieën op bij het laden van de component
    fetchCategories(); 
  }, []);

  // Functie om een willekeurige vraag op te halen uit de geselecteerde categorie en het geselecteerde type
  const getRandomQuestion = (type) => {
    if (selectedCategory && selectedCategory[type]) {
      // Array van vragen van het geselecteerde type binnen de geselecteerde categorie
      const questions = selectedCategory[type]; 
      // Controleren of vragen correct worden opgehaald
      console.log('Questions:', questions); 
      if (questions && questions.length > 0) {
        let randomIndex = Math.floor(Math.random() * questions.length);
        // Controleer of de nieuwe vraag gelijk is aan de vorige vraag
        while (questions[randomIndex] === previousQuestion) {
          randomIndex = Math.floor(Math.random() * questions.length);
        }
        // Controleren van willekeurige index
        console.log('Random index:', randomIndex);
        // Nieuwe vraag
        const newQuestion = questions[randomIndex];
        // Stel de nieuwe vraag in als vorige vraag
        setPreviousQuestion(newQuestion);
        // Return de willekeurig geselecteerde vraag
        return newQuestion; 
      } else {
        console.log('No questions found for the selected type');
        return 'No questions found';
      }
    } else {
      console.log('Selected category or type is null');
      return '';
    }
  };

  // Event handler voor het selecteren van een categorie
  const handleCategoryClick = (category) => {
    console.log('Selected category:', category);
    setSelectedCategory(category);
     // Reset geselecteerd type
    setSelectedType(null);
    // Reset huidige vraag
    setCurrentQuestion('');
  };

  // Event handler voor het selecteren van een type vraag
  const handleTypeClick = (type) => {
     // Print alleen de geselecteerde array
    console.log('Selected type:', { [type]: selectedCategory[type] });
    // Update de geselecteerde type vraag
    setSelectedType({ [type]: selectedCategory[type] });
    // Geef de type vraag mee om een nieuwe vraag op te halen
    const newQuestion = getRandomQuestion(type); 
    // Haal een nieuwe vraag op
    setCurrentQuestion(newQuestion); 
    // Controleren van de nieuwe vraag
    console.log('Question:', newQuestion);
  };

  // Event handler voor het teruggaan naar de categoriepagina
  const handleBackToCategoryClick = () => {
    // Reset geselecteerd type
    setSelectedType(null);
    // Reset huidige vraag
    setCurrentQuestion('');
  };

  // JSX die de User Interface renderen op basis van de staat van de component
  return (
    <div className="container">
      {/* Introductiescherm met categorieknoppen */}
      {!selectedCategory && (
        <div className="intro">
          <h1>Waarheid<br/>Durven<br/>Doen</h1>
          <h3>Wat voor vragen wil je?</h3>
          <div className="button-category-container">
            {/* Render categorieknoppen */}
            {categories.map((category, index) => (
              <button key={index} className="category-button" onClick={() => handleCategoryClick(category)}>
                {category.name}
              </button>
            ))}
          </div>
          {/* Logo-afbeelding */}
          <div className="logo">
            <a href="https://spotgroup.be/"><img src={logo} alt="logo SpotGroup"/></a>
          </div>
        </div>
      )}

      {/* Scherm voor het selecteren van een type vraag */}
      {selectedCategory && !selectedType && (
        <div className="intro">
          <h1>Waarheid<br/>Durven<br/>Doen</h1>
          <h3>Kies een type vraag</h3>
          <div className="button-container">
            {/* Render type vraagknoppen */}
            <button className="button" onClick={() => handleTypeClick('waarheid')}>Waarheid</button>
            <button className="button" onClick={() => handleTypeClick('durven')}>Durven</button>
            <button className="button" onClick={() => handleTypeClick('doen')}>Doen</button>
          </div>
          {/* Terugknop naar categoriepagina */}
          <div className="back-button-container">
            <a href="#" className="back-button" onClick={() => setSelectedCategory(null)}><FaArrowLeft /></a>
          </div>
          {/* Logo-afbeelding */}
          <div className="logo">
            <a href="https://spotgroup.be/"><img src={logo} alt="logo SpotGroup"/></a>
          </div>
        </div>
      )}

      {/* Scherm voor het weergeven van een vraag */}
      {selectedCategory && selectedType && (
        <div className="question">
          <h2>Vraag</h2>
          <div className="card">
            <div className="card-body">
              {/* Weergave van de huidige vraag */}
              <p className="question-text">{currentQuestion}</p>
            </div>
          </div>
          {/* Verder naar typepagina */}
          <div className="back-button-container">
            <a href="#" className="back-button" onClick={handleBackToCategoryClick}><FaArrowRight /></a>
          </div>
          {/* Logo-afbeelding */}
          <div className="logo">
            <a href="https://spotgroup.be/"><img src={logo} alt="logo SpotGroup"/></a>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaarheidDurvenDoen;