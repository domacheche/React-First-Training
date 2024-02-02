import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
    const searchString = useSelector(state => state.searchString);
    const [searchTerm, setSearchTerm] = useState(searchString);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setSearchTerm(searchString);
    }, [searchString]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSearchString(searchTerm));
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput 
                placeholder="Search..." 
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)}
            />
            <Button type="submit">
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;
