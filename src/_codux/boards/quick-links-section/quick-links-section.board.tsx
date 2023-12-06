import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { QuickLinksSection } from '../../../app/QuickLinksSection';

export default createBoard({
    name: 'QuickLinksSection',
    Board: () => <QuickLinksSection />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
