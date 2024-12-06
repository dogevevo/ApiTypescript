import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry} from '../types';
import DiaryData from './diary.json' 

const diaries: DiaryEntry[] = DiaryData as Array<DiaryEntry>

export const getEntries = (): DiaryEntry[] =>  diaries; 

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined=> { 
    const entry = diaries.find(b => b.id === id )

    if (entry != null) {
        const {comment, ...restOfDiary} = entry;
        return restOfDiary
    }

    return undefined
}

export const getEntriesWithOutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => { 
    return diaries.map(({id, date, weather, visibility}) => {
        return {id, date, weather, visibility}
    })
}

export const addDiaries = ( newDiaryEntry: NewDiaryEntry ): DiaryEntry => { 
    const newDiary = { 
        id: Math.max(...diaries.map(d => d.id)) + 1, 
        ...newDiaryEntry
    }

    diaries.push(newDiary)
    return newDiary
}


 