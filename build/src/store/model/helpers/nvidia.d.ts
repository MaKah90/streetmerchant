import { Browser } from 'puppeteer';
import { Link } from '../store';
export declare function generateSetupAction(): (browser: Browser) => Promise<void>;
export declare function generateOpenCartAction(id: number, cardName: string): () => Promise<string>;
export declare function generateLinks(): Link[];
