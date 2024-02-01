import styles from './TextInput.module.scss';

const TextInput = ({ value, onChange, placeholder }) => {
    return (
        <input 
            className={styles.input} 
            placeholder={placeholder} 
            type="text" 
            value={value} 
            onChange={onChange}
        />
    );
}



export default TextInput;