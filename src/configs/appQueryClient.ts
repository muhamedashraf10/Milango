import {createSyncStoragePersister} from '@tanstack/query-sync-storage-persister';
import {QueryClient} from '@tanstack/react-query';
import {MMKV} from 'react-native-mmkv';

const oneDay = 24 * 60 * 60 * 1000;

export const storage = new MMKV({
  id: 'mmkv.default',
  encryptionKey: 'milango-2024',
});

const appQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: oneDay,
      staleTime: oneDay,
      retry: false,
      retryOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const clientStorage = {
  setItem: (key: string, value: string) => {
    storage.set(key, value);
  },
  getItem: (key: string) => {
    const value = storage.getString(key);
    return value === undefined ? null : value;
  },
  removeItem: (key: string) => {
    storage.delete(key);
  },
};

export const syncStoragePersister = createSyncStoragePersister({
  storage: clientStorage,
});

export default appQueryClient;
