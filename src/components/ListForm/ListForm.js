import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { addList } from '../../redux/store';

const ListForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(addList({ title, description }));
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.listForm}>
            <label>
                Title:
                <TextInput 
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    placeholder="Enter list title" 
                />
            </label>
            <label>
                Icon:
                <TextInput 
                    value={description} 
                    onChange={e => setDescription(e.target.value)} 
                    placeholder="Enter list description" 
                />
            </label>
            <Button type="submit">Add list</Button>
        </form>
    );
};

export default ListForm;
