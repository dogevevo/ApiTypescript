import { NewDiaryEntry, Visibility, Weather } from "./types";


const parseComment = (commentFromRequest: any):string =>  { 
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment'); 
    }

    return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => { 
    if (!isString(dateFromRequest) || !isDate(dateFromRequest) ) {
        throw new Error('Incorrecr or missing date')
    }

    return dateFromRequest 
}

const parseWeater = (weatherFromRequest: any): Weather => { 
    if (!isString(weatherFromRequest)  || isWeater(weatherFromRequest)) {
        throw new Error('Incorrect or missing Weather'); 
    }

    return weatherFromRequest
}

const parseVisivility = (visibilityFromRequest: any): Visibility => { 
    if (!isString(visibilityFromRequest) || isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing Visivility')
    }

    return visibilityFromRequest
}

const isVisibility = (string:string): boolean => { 
    return ['great' , 'good' , 'ok' , 'poor'].includes(string)
}

const isString = (string : string): boolean => { 
    return typeof string === string
}

const isDate = (date : string): boolean => { 
    return Boolean(Date.parse(date))
}

const isWeater = (string:string): boolean => { 
    return ['sunny' , 'rainy' , 'cloudy' , 'windy' , 'stormy'].includes(string)
}

const toNewDiaryEntry = (object:any): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = { 
        //...
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeater(object.weather),
        visibility: parseVisivility(object.visibility)
    }

    return newEntry
} 

export default toNewDiaryEntry