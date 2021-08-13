import { NvidiaRegionInfo } from '../nvidia-api';
import { Browser } from 'puppeteer';
export declare class NvidiaCart {
    protected readonly browser: Browser;
    protected isKeepAlive: boolean;
    protected sessionToken: string | null;
    constructor(browser: Browser);
    keepAlive(): void;
    get fallbackCartUrl(): string;
    get regionInfo(): NvidiaRegionInfo;
    get sessionUrl(): string;
    addToCard(productId: number, name: string): Promise<string>;
    getSessionToken(): Promise<string>;
    refreshSessionToken(): Promise<void>;
    protected addToCartAndGetLocationRedirect(productId: number): Promise<string>;
}
