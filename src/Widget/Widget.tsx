import React, { FunctionComponent, memo, useMemo } from 'react';
import clsx from 'clsx';
import { WidgetPropsType } from './_types';
import './Widget.css';

export const Widget: FunctionComponent<WidgetPropsType> = memo(
    () => {
        return (
            <div className={clsx('Widget')}>
                
            </div>
        );
    }
);
