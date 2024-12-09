export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'; 
export type Visibility = 'great' | 'good' | 'ok' | 'poor'; 

export enum Weather { 
    Sunny = 'sunny', 
    Rainy = 'rainy'
}

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

