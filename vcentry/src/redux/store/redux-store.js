import {createStore} from 'redux';
import rootReducer from '../reducer/index';

export default function configureStore(intialState){
  return createStore(rootReducer, intialState)
}