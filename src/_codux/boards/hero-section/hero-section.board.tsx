import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { HeroSection } from '../../../app/HeroSection';

export default createBoard({
    name: 'HeroSection',
    Board: () => <HeroSection />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    }
});
