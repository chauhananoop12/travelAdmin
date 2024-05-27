import { hookstate } from '@hookstate/core';

export const state = hookstate(true);

export const updateUser = () => {
    return state.set(!state.get());
};
