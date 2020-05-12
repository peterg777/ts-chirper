import * as express from 'express';
import chirpStore from '../utils/chirpstore';
let router = express.Router();
//get request
router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        res.json(chirpStore.GetChirp(id));
    } else {
        const data = chirpStore.GetChirps()
        const chirps = Object.keys(data).map(key => {
            return {
                id: key,
                user: data[key].user,
                message: data[key].message

            }
        })
        chirps.pop()
        res.json(chirps);
    }
});
//post request
router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    console.log(req.body);
    res.sendStatus(201);
});
// put request
router.put('/:id', (req, res) => {
    let id = req.params.id;
    chirpStore.UpdateChirp(id, req.body);
    res.sendStatus(204);
});
//delete request
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    chirpStore.DeleteChirp(id);
    res.sendStatus(204);
});

export default router;