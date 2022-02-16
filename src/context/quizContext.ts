import { createContext } from "react";
import { IquizContext } from "../types";

// @ts-ignore
const quizContext = createContext<IquizContext>({})

export default quizContext