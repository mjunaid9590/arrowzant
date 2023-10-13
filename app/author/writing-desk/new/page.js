"use client"
import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';


const NewDraft = () => {
    const [novel, setNovel] = useState(null);
    const [action, setAction] = useState('new'); // 'new' or 'edit'

    const handleNovelChange = (event, newValue) => {
        setNovel(newValue);
    };

    const handleActionChange = (event) => {
        setAction(event.target.value);
    };

    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-col w-full mb-8">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                            Add New Draft
                        </h1>
                    </div>
                    <div>
                        <div className="flex flex-col justify-evenly -m-2 bg-indigo-200 py-5 rounded-2xl">
                            <div className="p-2 w-3/4 mx-auto">
                                <div className="flex flex-col">
                                    
                                    <Autocomplete
                                        id="novel"
                                        options={['Novel 1', 'Novel 2', 'Novel 3']} // Replace with your novel data
                                        value={novel}
                                        onChange={handleNovelChange}
                                        renderInput={(params) => (
                                            <TextField {...params} variant="outlined" label="Select a Novel" />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-3/4 mx-auto">
                                <FormControl component="fieldset">
                                    <div className="flex flex-col">
                                        <RadioGroup
                                            aria-label="action"
                                            name="action"
                                            value={action}
                                            onChange={handleActionChange}
                                        >
                                            <FormControlLabel
                                                value="new"
                                                control={<Radio />}
                                                label="Add a New Chapter"
                                            />
                                            <FormControlLabel
                                                value="edit"
                                                control={<Radio />}
                                                label="Edit an Existing Chapter"
                                            />
                                        </RadioGroup>
                                    </div>
                                </FormControl>
                            </div>

                            {action === 'edit' && (
                                <div className="p-2 w-3/4 mx-auto">
                                    <div className="flex flex-col">
                                        <label htmlFor="chapter" className="my-auto py-2 text-2xl leading-7 text-gray-600">
                                            Chapter
                                        </label>
                                        <Autocomplete
                                            id="chapter"
                                            options={['Chapter 1', 'Chapter 2', 'Chapter 3']} // Replace with your chapter data
                                            renderInput={(params) => (
                                                <TextField {...params} variant="outlined" label="Select a Chapter" />
                                            )}
                                        />
                                    </div>
                                </div>
                            )}
                            <Link href="/author/writing-desk/edit" className='mx-auto'>
                                <button className="mx-auto text-lg p-2 px-10 mt-4 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white">
                                   <AddIcon /> Add Draft
                                </button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewDraft;
