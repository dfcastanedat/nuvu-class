import { TEST } from "./types";

export const setTest = (test) => (
    {
        type: TEST,
        test,
    }
);