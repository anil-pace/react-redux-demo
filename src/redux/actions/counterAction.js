import { INCREMENT, DECREMENT } from './index';

export function increment() {
    console.log("actions ===> increment");
    return {
        type: 'INCREMENT'
    }
}
export function decrement() {
    console.log("actions ===> decrement");

    return {
        type: 'DECREMENT'
    }
}
export function reset() {
    console.log("actions ===> reset");

    return { type: 'RESET' }
}

export const activateGeod = geod => ({
    type: 'ACTIVATE_GEOD',
    geod,
});

export const closeGeod = () => ({
    type: 'CLOSE_GEOD',
});