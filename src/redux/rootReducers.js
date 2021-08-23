import authentication from 'components/features/OnBoarding/authenticationSlice';
import organization from './organization';
//Include all the reducer to combine and provide to configure store.

const rootReducer =  {
  authentication,
  organization,
}

export default rootReducer;
