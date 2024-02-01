import React from 'react';
import { useSelector } from 'react-redux';
import { getAllColumns } from '../../redux/store';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import styles from './List.module.scss';

const List = () => {
    const columns = useSelector(getAllColumns);

    return (
        <div>
            <header className={styles.header}>
                <h2 className={styles.title}>Things to do<span>soon!</span></h2>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <section className={styles.columns}>
                {columns.map(column => (
                    <Column 
                        key={column.id} 
                        id={column.id} 
                        title={column.title} 
                        icon={column.icon}
                    />
                ))}
            </section>
            <ColumnForm />
        </div>
    );
};

export default List;
