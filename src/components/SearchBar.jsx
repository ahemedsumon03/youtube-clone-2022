import React, { useState } from 'react'
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search) {
            navigate(`/search/${search}`);
            setSearch('');
        }
    }

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 },
            }}
        >
            <input
                className='search-bar'
                placeholder="Search.."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <IconButton type="submit" sx={{
                p: '10px',
                color: 'red'
            }}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar