import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';

const CardForm = ({ action, columnId }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, columnId });
        setTitle('');
    };

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput 
                value={title} 
                onChange={e => setTitle(e.target.value)}
            />
            <Button>Add card</Button> {}
        </form>
    );
};

export default CardForm;
