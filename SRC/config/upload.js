import multer from 'multer'
import path from 'path'

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__irname, '..', '..', 'uploads'),
        filename: (req, res, cb) => {
            const ext = path.extname(file.originalname);
            const base = path.basename(file.originalname, ext);
            cb(null, '${name}-${date.now()}${ext}')
        },
    })
}