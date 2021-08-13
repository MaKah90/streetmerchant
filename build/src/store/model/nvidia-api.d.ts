import { Store } from './store';
export interface NvidiaRegionInfo {
    currency: string;
    drLocale: string;
    fe3080Id: number | null;
    fe3090Id: number | null;
    fe2060SuperId: number | null;
    siteLocale: string;
}
export declare const regionInfos: Map<string, NvidiaRegionInfo>;
export declare const NvidiaApi: Store;
