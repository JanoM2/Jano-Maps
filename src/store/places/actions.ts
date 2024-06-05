import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/apis';
import { Feature, PlacesResponse } from '@/interfaces/places';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation({ commit }) {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit("setLngLat", { lng: coords.longitude, lat: coords.latitude }),
            (err) => {
                console.error(err)
                throw new Error("No geolocation :c")
            }
        );
    },

    // todo: colocar el valor de retorno
    async searchPlacesByTerm({ commit, state }, query: string) {

        if (query.length === 0) {
            console.log(query.length)
            commit("setPlaces", [])
            return [];
        }
        if (!state.userLocation) { throw new Error("No hay ubicacion del usuario") }

        commit("setIsLoadingPlaces")

        const res = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation?.join(',')
            }
        })

        commit("setPlaces", res.data.features)

        return res.data.features
    }
}

export default actions;