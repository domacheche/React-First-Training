import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const ColumnForm = () => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ 
            type: 'ADD_COLUMN', 
            payload: { title, icon } 
        });
        setTitle('');
        setIcon('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <label>
                <span>Title:</span>
                <TextInput 
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    placeholder="Enter title" 
                />
            </label>
            <label>
                <span>Icon:</span>
                <TextInput 
                    value={icon} 
                    onChange={e => setIcon(e.target.value)} 
                    placeholder="Enter icon" 
                />
            </label>
            <Button>Add column</Button> {}
        </form>
    );
};

export default ColumnForm;
