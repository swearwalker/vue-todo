import { db } from '@/config/db';

const firebasePersistor = (id, params) => {
    return db.collection('notes').doc(id).update({
        comments: state.note.comments.concat(comment)
    })
}
const localStoragePersistor = () => {

}

const storageTypesFactory = () => {

}

export default storageTypesFactory;
