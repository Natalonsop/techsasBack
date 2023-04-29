import UserModel from '../models/UserModel.js'

export default  createUser = async (req,res) =>{
    try {
        await UserModel.create(req.body)
        res.status(201).json({
            'message': 'Se ha creado el usuario corectamente'
        })
    } catch (error) {
        res.status(404).json({
            'message': 'Pailas, algo salio mal xdxd'
        })
    }
}    