export const createID = (): string => Math.round(Math.random() * 1000000).toString();

export const countPercent = (score: number, length: number) : string => `${Math.round((score / length) * 100)}%`;
