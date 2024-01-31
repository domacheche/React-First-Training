import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSearchString(searchTerm));
        setSearchTerm('');
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput 
                placeholder="Search..." 
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)}
            />
            <Button type="submit">
                <span className="fa fa-search" /> {}
            </Button>
        </form>
    );
};

export default SearchForm;
