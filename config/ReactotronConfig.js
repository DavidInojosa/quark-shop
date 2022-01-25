import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';


//192.168.0.62
Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({ host: 'localhost' })
  .useReactNative()
  .use(reactotronRedux())
  .use(reactotronSaga())
  .connect();

// console.tron.log()
console.tron = Reactotron;
export default Reactotron;
