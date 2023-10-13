"use client"
import React from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const columns = [
    { id: 'name', label: 'Novel Name' },
    { id: 'genre', label: 'Genre' },
    {
        id: 'views',
        label: 'Views',
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'likes',
        label: 'Likes',
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'status',
        label: 'Status',
    },
    {
        id: 'actions',
        label: 'Actions',
        align: 'center',
    },
];

// Create a function to render the action buttons for each row
function renderActions(row) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        // <TableCell key="actions" align="center">
        <>
            <Button variant="outlined" color="primary" onClick={handleClick}>
                Actions
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handlePublishUnpublish(row)}>
                    {row.status === 'completed' ? 'Unpublish' : 'Publish'}
                </MenuItem>
                <MenuItem onClick={() => handleAddToEditorsPick(row)}>
                    Add to Editor's Pick
                </MenuItem>
                <MenuItem onClick={() => handleEdit(row)}>Edit</MenuItem>
                <MenuItem onClick={() => handleDelete(row)}>Delete</MenuItem>
            </Menu>
            </>
        // </TableCell>
    );
}

// Modify the 'novelsData' to include a unique 'id' field for each row
const novelsData = [
    {
        id: 1,
        name: 'The Great Novel',
        author: 'John Doe',
        genre: 'Mystery',
        views: 10000,
        likes: 500,
        status: 'completed',
    },
    {
        id: 2,
        name: 'Epic Adventure',
        author: 'Jane Smith',
        genre: 'Adventure',
        views: 25000,
        likes: 800,
        status: 'Ongoing',
    },
    {
        id: 3,
        name: 'Mystery Mansion',
        author: 'David Johnson',
        genre: 'Mystery',
        views: 8000,
        likes: 350,
        status: 'Ongoing',
    },
    {
        id: 4,
        name: 'Sci-Fi Odyssey',
        author: 'Sarah Lee',
        genre: 'Science Fiction',
        views: 35000,
        likes: 1200,
        status: 'completed',
    },
    {
        id: 5,
        name: 'The Lost Treasure',
        author: 'Michael Brown',
        genre: 'Adventure',
        views: 12000,
        likes: 600,
        status: 'completed',
    },
    {
        id: 6,
        name: 'Secrets of the Past',
        author: 'Emily White',
        genre: 'Mystery',
        views: 15000,
        likes: 700,
        status: 'completed',
    },
    {
        id: 7,
        name: 'A Journey Through Time',
        author: 'Daniel Taylor',
        genre: 'Science Fiction',
        views: 28000,
        likes: 900,
        status: 'completed',
    },
    {
        id: 8,
        name: 'The Enchanted Forest',
        author: 'Olivia Green',
        genre: 'Fantasy',
        views: 9000,
        likes: 400,
        status: 'completed',
    },
    {
        id: 9,
        name: 'The Mysterious Island',
        author: 'William Clark',
        genre: 'Adventure',
        views: 11000,
        likes: 550,
        status: 'completed',
    },
    {
        id: 10,
        name: 'Chronicles of the Cosmos',
        author: 'Lucas Anderson',
        genre: 'Science Fiction',
        views: 32000,
        likes: 1100,
        status: 'completed',
    },
    {
        id: 11,
        name: 'The Haunting Shadows',
        author: 'Sophia Davis',
        genre: 'Horror',
        views: 7500,
        likes: 300,
        status: 'completed',
    },
    {
        id: 12,
        name: 'Legends of the Past',
        author: 'Ethan Harris',
        genre: 'Fantasy',
        views: 10500,
        likes: 480,
        status: 'completed',
    },
    {
        id: 13,
        name: 'Space Odyssey',
        author: 'Ava Wilson',
        genre: 'Science Fiction',
        views: 42000,
        likes: 1500,
        status: 'completed',
    },
    {
        id: 14,
        name: 'The Hidden Code',
        author: 'Nathan Turner',
        genre: 'Mystery',
        views: 9500,
        likes: 400,
        status: 'completed',
    },
    {
        id: 15,
        name: 'Quest for the Crown',
        author: 'Lily Adams',
        genre: 'Fantasy',
        views: 13000,
        likes: 600,
        status: 'completed',
    },
    {
        id: 16,
        name: 'Time Traveler\'s Journal',
        author: 'Jack Evans',
        genre: 'Science Fiction',
        views: 31000,
        likes: 1050,
        status: 'completed',
    },
    {
        id: 17,
        name: 'Whispers in the Dark',
        author: 'Emma Parker',
        genre: 'Horror',
        views: 6800,
        likes: 270,
        status: 'completed',
    },
    {
        id: 18,
        name: 'The Enchanted Castle',
        author: 'James Smith',
        genre: 'Fantasy',
        views: 8800,
        likes: 400,
        status: 'completed',
    },
    {
        id: 19,
        name: 'The Quantum Paradox',
        author: 'Grace White',
        genre: 'Science Fiction',
        views: 38000,
        likes: 1300,
        status: 'completed',
    },
    {
        id: 20,
        name: 'The Haunted Mansion',
        author: 'Ella Taylor',
        genre: 'Horror',
        views: 7200,
        likes: 280,
        status: 'completed',
    },
    {
        id: 21,
        name: 'The Lost Kingdom',
        author: 'Aiden Brown',
        genre: 'Fantasy',
        views: 9400,
        likes: 430,
        status: 'completed',
    },
    {
        id: 22,
        name: 'Voyage to the Stars',
        author: 'Zoe Anderson',
        genre: 'Science Fiction',
        views: 36000,
        likes: 1200,
        status: 'completed',
    },
    {
        id: 23,
        name: 'The Haunting Tales',
        author: 'Logan Davis',
        genre: 'Horror',
        views: 7000,
        likes: 260,
        status: 'completed',
    },
    {
        id: 24,
        name: 'The Mythical Creatures',
        author: 'Sofia Harris',
        genre: 'Fantasy',
        views: 8900,
        likes: 380,
        status: 'completed',
    },
    {
        id: 25,
        name: 'The Time Machine',
        author: 'Noah Wilson',
        genre: 'Science Fiction',
        views: 40000,
        likes: 1400,
        status: 'completed',
    },
    // Add more rows as needed
];


// Function to handle actions (e.g., publish/unpublish, add to Editor's Pick, edit, delete)
function handlePublishUnpublish(row) {
    // Implement publish/unpublish logic here
    console.log(row.status === 'completed' ? 'Unpublishing' : 'Publishing', row.name);
}

function handleAddToEditorsPick(row) {
    // Implement add to Editor's Pick logic here
    console.log('Adding to Editor\'s Pick:', row.name);
}

function handleEdit(row) {
    // Implement edit logic here
    console.log('Editing:', row.name);
}

function handleDelete(row) {
    // Implement delete logic here
    console.log('Deleting:', row.name);
}

export default function AuthorNovelsDataTable() {
    const [searchQuery, setSearchQuery] = useState(''); // State for search query
    const [genreFilter, setGenreFilter] = useState('All'); // State for genre filter
    const [statusFilter, setStatusFilter] = useState('All');

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            
            <TableContainer sx={{ maxHeight: 440,  }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead className='font-bold'>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    className="font-bold" // Add this class for bold headings
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {novelsData
                            .filter((row) => {
                                // Apply filters
                                if (
                                    (genreFilter === 'All' || row.genre === genreFilter) &&
                                    (statusFilter === 'All' || row.status === statusFilter)
                                ) {
                                    // Apply search query
                                    return row.name.toLowerCase().includes(searchQuery.toLowerCase());
                                }
                                return false;
                            })
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.id === 'actions'
                                                        ? renderActions(row) // Render action buttons
                                                        : column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>

                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={novelsData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
