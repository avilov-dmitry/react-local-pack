import React, { FunctionComponent, memo, useMemo } from 'react';
import clsx from 'clsx';
import { WidgetPropsType } from './_types';
import styles from './Widget.module.scss';

export const Widget: FunctionComponent<WidgetPropsType> = memo(
    () => {
        return (
            <div className={clsx(styles.Widget)}>
                
            </div>
        );
    }
);
