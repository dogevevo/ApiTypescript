import express from 'express';
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils';
const router = express.Router(); 

router.get('/', (_req, res) => { 
    res.send(diaryServices.getEntriesWithOutSensitiveInfo()); 
})

router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(+req.params.id)

    if (diary != null) {
        res.send(diary);
    } else { 
        res.sendStatus(404)
    }
})

router.post('/', (req, res) => {
    try {
    
        const newDiaryEntry = toNewDiaryEntry(req.body)

        const AddedDiaryEntry = diaryServices.addDiaries(newDiaryEntry)
    
        res.json(AddedDiaryEntry); 

    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message)
        }else{ 
            res.status(400).send('An Unknow error ocurred')
        }
    }

})

export default router
