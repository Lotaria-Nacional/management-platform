export const LicenceStatusEnum = {
    USED: "USADO",
    NOT_USED: "NÃO USADO"
} as const 

export type LicenceStatus = typeof LicenceStatusEnum[keyof typeof LicenceStatusEnum ]