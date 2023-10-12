"use client"
import React, {useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import AddModalLandingPage from '@/components/AddModalLandingPage';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedNovel, setSelectedNovel] = useState('');

  const novelsData = [
    {
      "category": "Editor's Picks",
      "novels": [
        "The Magical World",
        "Enchanted Realms",
        "The Wizards' Quest",
        "Realm of Magic",
        "Dragon's Tale"
      ]
    },
    {
      "category": "Mystery",
      "novels": [
        "The Secret Detective",
        "Murder at Midnight",
        "The Mysterious Manuscript",
        "Whispers in the Dark",
        "Noir Chronicles"
      ]
    },
    {
      "category": "Science Fiction",
      "novels": [
        "Galactic Explorers",
        "Time Traveler's Dilemma",
        "Alien Encounter",
        "Future Chronicles",
        "Interstellar Journeys"
      ]
    },
    {
      "category": "Romance",
      "novels": [
        "Love in Paris",
        "Summer Romance",
        "Eternal Love",
        "Unforgettable Moments",
        "Passion's Embrace"
      ]
    },
    {
      "category": "Adventure",
      "novels": [
        "Quest for Treasure",
        "Pirate's Legacy",
        "Lost in the Jungle",
        "Explorers' Odyssey",
        "Mysteries of the Amazon"
      ]
    },
    {
      "category": "Historical Fiction",
      "novels": [
        "The Victorian Era",
        "Renaissance Chronicles",
        "Ancient Civilizations",
        "The War Stories",
        "Timeless Legends"
      ]
    },
    {
      "category": "Thriller",
      "novels": [
        "The Dark Conspiracy",
        "Dangerous Pursuit",
        "In the Shadows",
        "The Silent Witness",
        "Twisted Secrets"
      ]
    },
    {
      "category": "Comedy",
      "novels": [
        "Laugh Out Loud",
        "Comic Capers",
        "Funny Business",
        "Humor Unlimited",
        "The Comedy Chronicles"
      ]
    },
    {
      "category": "Horror",
      "novels": [
        "Nightmare on Elm Street",
        "House of Horrors",
        "The Haunting",
        "Cursed Souls",
        "The Horror Show"
      ]
    }
    // You can keep adding more categories and novels as needed
  ]

  const openModal = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory('');
    setSelectedNovel('');
  };

  const handleAddNovel = () => {
    // Handle adding the selected novel to the category here
    console.log('Adding novel to category:', selectedCategory, selectedNovel);
    closeModal();
  };

  
  
  
  return (
    <div className='p-5'>
      <h2 className="text-2xl pb-2">Select the Genres/Categories to show on the front page.</h2>
      <FormGroup className='flex flex-row pb-4'>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Editor's Picks" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Horror" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Romance" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Science Fiction" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Adventure" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Billionare" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Crime" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Comedy" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="History" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Superhero" />

      </FormGroup>
      <h2 className="text-2xl pb-4 pt-2">Select the Novels to show on the front page.</h2>
      <div className="flex flex-col md:flex-grow md:flex-wrap">
        {novelsData.map((categoryData, index) => (
        <div key={index} className=" w-full md:w-1/2 p-3 mb-8 border-r border-gray-400">
          <div className="flex flex-col md:flex-row justify-between border-b border-gray-600">
            <h2 className='text-3xl pb-2  font-semibold'>
              {categoryData.category}
            </h2>
            <button onClick={() => openModal(categoryData.category)} className='text-center md:text-end my-auto text-md p-1 px-3 rounded-lg bg-green-500 hover:bg-green-600 dark:bg-green-800 text-white'><AddIcon /> Add Novel</button>
          </div>
          {categoryData.novels.map((novel, novelIndex) => (
            <div key={novelIndex} className="border-b border-gray-400 flex flex-row justify-between p-2">
              <h3 className='text-xl md:w-5/6 my-auto'>{novel}</h3>
              <button className='text-end my-auto md:w-1/6 ml-10 text-md p-1 px-3 rounded-lg bg-red-500 dark:bg-red-800 hover:bg-red-600 text-white'>Remove</button>
            </div>
          ))}
        </div>
      ))}
      <AddModalLandingPage
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        novels={novelsData.find((category) => category.category === selectedCategory)?.novels || []}
      />
        

      </div>

    </div>
  )
}

export default LandingPage
