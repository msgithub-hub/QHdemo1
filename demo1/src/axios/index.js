import { axios } from 'castle-haozijunqaq-uni-utils';
import resultCodeHandler from './resultCodeHandler'
import property from '../property'

axios.setBaseUrl(property.BASE_URL);
axios.setResultCodeHandler(resultCodeHandler);
