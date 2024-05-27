


import { hookstate } from '@hookstate/core';

export const state = hookstate(true);

export const update = () => {
   return state.set(!state.get());
}

