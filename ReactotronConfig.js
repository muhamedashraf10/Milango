import Reactotron from 'reactotron-react-native';
import mmkvPlugin from 'reactotron-react-native-mmkv';
import {storage} from './src/configs/appQueryClient';
import {networking} from 'reactotron-react-native';

Reactotron.configure()
  .use(mmkvPlugin({storage}))
  .useReactNative()
  .use(networking())
  .connect();
