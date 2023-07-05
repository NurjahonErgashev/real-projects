// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
// Children Type
import { ChildrenType } from '../types/default';
export const NextUiComponent = (props: ChildrenType) => (
    <NextUIProvider>
        <>{props?.children}</>
    </NextUIProvider>
)