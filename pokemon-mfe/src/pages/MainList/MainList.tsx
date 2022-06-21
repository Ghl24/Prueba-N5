import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './MainList.scss';
import { usePokemon } from '../../customHooks/usePokemon';
import { Table } from '../../components/table/Table';

const MainList = () => {
    const { t } = useTranslation();
    const { listPokemon, getListPokemon } = usePokemon();

    useEffect(() => {
        getListPokemon();
    }, []);
    console.log(listPokemon);
    return (
        <div className="page-wrapper">
            <div className="page-wrapper_title">
                <h3>{t('name')}</h3>
            </div>
            <div className="page-wrapper_body">
                <Table listPokemon={listPokemon} />
            </div>
        </div>
    );
};

export default MainList;
