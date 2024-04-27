import React, { FunctionComponent, useEffect } from 'react';
import { makeAutoObservable, runInAction } from 'mobx';
import { observer } from 'mobx-react';
import clsx from 'clsx';
import { WidgetPropsType } from './_types';
import './Widget.css';

class CatsStore {
    list = []

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    fetchPokemonsAction(url: string) {
        console.log('fetchPokemons start')
        fetch(url)
            .then(res => res.json())
            .then(list => {
                runInAction(() => {
                    console.log('fetchPokemons then', list)
                    this.list = list;
                })
            })
            .catch((e) => {
                console.error('fetchPokemons error', e)
            })
    }
}

export const catsStore = new CatsStore();

export const Widget: FunctionComponent<WidgetPropsType> = observer(({ url = 'https://api.thecatapi.com/v1/images/search?limit=10' }) => {
    const { list, fetchPokemonsAction } = catsStore;

    useEffect(() => {
        console.log('useEffect')
        fetchPokemonsAction(url)
    }, [url])

    return (
        <div className={clsx('Widget')}>
            {list.length ?
                list.map((i: any) => <div key={i.id}><img src={i.url}/></div> ) :
                <div> список пуст </div>
            }
        </div>
    );
})
