import { db } from './dbConnect.js'

export function addNewAnimal(req,res) {
    const newAnimal =req.body 
    db.collection('animals').add(newAnimal)
    .then(doc => res.status(201)).send("New Arrival Added:"+ doc.id)
    .catch(err => res.status(500).send(err))
}

export async function getAllAnimals(req,res){
    const collection= await db.collection('animals').get()
    const animalsList = collection.docs.map({...animal=> animal.data(),id:animal.id})
}
const animalsList= collection.docs.map(animal =>({...animal.data(),id:animal.id}))
res.send