import {NameSpace} from "./reducers/reducer";
import {createSelector} from 'reselect';
import {getCurrentCityOffers, sortOfersBy, adaptDataToClient} from "../utils";

export const getOffers = (state) => state[NameSpace.API_DATA].offers;

export const getAuthorizationStatus = (state) => state[NameSpace.API_DATA].authorizationStatus;

export const getCurrentCity = (state) => state[NameSpace.APP_STATE].currentCity;

export const getCities = (state) => state[NameSpace.APP_STATE].cities;

export const getCurrentSortType = (state) => state[NameSpace.APP_STATE].currentSortType;

export const getActiveCard = (state) => state[NameSpace.APP_STATE].activeCard;

const adaptedOffers = createSelector(
    getOffers,
    (offers) => adaptDataToClient(offers)
);

export const getFilteredOffers = createSelector(
    adaptedOffers,
    getCurrentCity,
    getCurrentSortType,
    (offers, currentCity, currentSortType) => sortOfersBy[currentSortType](getCurrentCityOffers(offers, currentCity).slice())
);
