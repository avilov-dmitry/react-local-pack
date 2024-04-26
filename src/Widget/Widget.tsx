import React, { FunctionComponent, memo, useEffect, useMemo } from 'react';
import { makeAutoObservable, runInAction } from 'mobx';
import { observer } from 'mobx-react';
import clsx from 'clsx';
import { WidgetPropsType } from './_types';
import './Widget.css';

function createCatsStore() {
    return makeAutoObservable({
        list: [],
        fetchPokemons() {
            console.log('fetchPokemons start')
            fetch('https://api.thecatapi.com/v1/images/search?limit=10')
                .then(res => res.json())
                .then(list => runInAction(() => {
                    console.log('fetchPokemons list')
                    this.list = list
                }))
                .catch(() => {
                    console.log('fetchPokemons list')
                })
        },
    })
}

const catsStore = createCatsStore()

export const Widget: FunctionComponent<WidgetPropsType> = observer(
    () => {
        const { list } = catsStore;
        return (
            <div className={clsx('Widget')}>
                {list.length ?
                    <div> {list.map((i: any) => <div key={i.id}><img src={i.url}/></div> )} </div> : 
                    <div> список пуст </div>
                }
            </div>
        );
    }
);
