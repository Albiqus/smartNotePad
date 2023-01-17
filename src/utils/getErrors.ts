import { ERRORS } from "../data"

export const getErrors = (titleValue: string, descriptionValue: string) => {
    const errors : any = {}
    if (!Boolean(titleValue.split('').filter(sym => sym !== ' ').join(''))) {
        errors.title = ERRORS.emptyTitle 
    }
    if (!Boolean(descriptionValue.split('').filter(sym => sym !== ' ' && sym !== '\n').join(''))) {
        errors.description = ERRORS.emptyDescription
    }
    return errors
}