export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'; 
export type Visivility = 'great' | 'good' | 'ok' | 'poor'; 

export interface DiaryEntry { 
    id: number, 
    date: string, 
    weather: Weather, 
    visibility: Visivility,
    comment: string 
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility' >

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment' > 
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

