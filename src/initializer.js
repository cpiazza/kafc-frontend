import Axios from "axios";
import { setBaseUrl } from './services/axios/setBaseUrl';
import { setCommonHeaders } from './services/axios/setCommonHeaders';

setBaseUrl(Axios);
setCommonHeaders(Axios);