


import { hookstate } from '@hookstate/core';

export const state = hookstate([]);

export const update = (permissions) => {
   return state.set(permissions);
}

