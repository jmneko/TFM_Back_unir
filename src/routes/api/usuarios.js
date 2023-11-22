const router = require('express').Router()
const UsuariosController = require('../../controllers/usuarios.controller')

router.get('/', UsuariosController.getAllUsuarios)
router.put("/:usuarioId", UsuariosController.updateUsuario)
router.delete('/:usuarioId', UsuariosController.deleteUsuario)

module.exports = router