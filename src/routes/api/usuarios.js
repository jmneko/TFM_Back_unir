const router = require('express').Router();
const UsuariosController = require('../../controllers/usuarios.controller');

router.get('/', UsuariosController.getAllUsuarios);
router.get('/:usuarioId', UsuariosController.getUsuarioById);
router.get('/:profesorId/especialidades', UsuariosController.getEspecialidadByProfesorId)
router.get('/:profesorId/chats/:alumnoId', UsuariosController.getChatByUsuariosId)
router.get('/:profesorId/puntuaciones', UsuariosController.getPuntuacionesByProfesorId)
router.get('/:profesorId/clases/:alumnoId',UsuariosController.getClasesByUsuariosId)
router.post('/', UsuariosController.createUsuario);
router.post('/:profesorId/especialidades',UsuariosController.insertEspecialidadByProfesor)
router.put("/:usuarioId", UsuariosController.updateUsuario);
router.delete('/:profesorId/especialidades', UsuariosController.deleteEspecialidadByUsuario)
router.delete('/:usuarioId', UsuariosController.deleteUsuario);
router.delete('/:profesorId/clases',UsuariosController.deleteClaseByProfesorId)

module.exports = router;