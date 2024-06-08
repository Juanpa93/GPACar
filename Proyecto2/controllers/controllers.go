package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"strings"

	"github.com/juanpa93/Proyecto1/models"
	"github.com/juanpa93/Proyecto1/repository"
)

var (
	listQuery      = "SELECT id, time, comment, reactions FROM comentarios limit $1 offset $2"
	listQuery2     = "SELECT id, time, comment, reactions FROM comentarios where id <= $2 limit $1"
	readQuery      = "SELECT id, time, comment, reactions FROM comentarios where id = $1"
	crearQuery     = "INSERT INTO comentarios (time, comment, reactions) VALUES (:time, :comment, :reactions) RETURNING id"
	crearQueryUser = "INSERT INTO usuarios (documento, contrasena, nombres, apellidos, celular, fecha_nacimiento, sexo, correo ) VALUES (:documento, :contrasena, :nombres, :apellidos, :celular, :fecha_nacimiento, :sexo, :correo) RETURNING id"
	updateQuery    = "UPDATE comentarios SET %s where Id=:id"
	deleteQuery    = "DELETE FROM comentarios where id=$1"
	iniciarSesion  = "SELECT * FROM usuarios WHERE correo = $1"
)

type Controller struct {
	repo repository.Repository[models.Comentario]
}

type ControllerUser struct {
	repo repository.Repository[models.Usuario]
}

func NewControllerUser(repo2 repository.Repository[models.Usuario]) (*ControllerUser, error) {
	if repo2 == nil {
		return nil, fmt.Errorf("Para un controlador es necesario un repo valido")
	}
	return &ControllerUser{
		repo: repo2,
	}, nil
}

func NewController(repo repository.Repository[models.Comentario]) (*Controller, error) {
	if repo == nil {
		return nil, fmt.Errorf("Para un controlador es necesario un repo valido")
	}
	return &Controller{
		repo: repo,
	}, nil
}

func (c *Controller) ListarComentarios() ([]byte, error) {
	comentarios, _, err := c.repo.List(context.Background(), listQuery, 10, 0)
	if err != nil {
		log.Printf("Fallo al leer comentarios, con error: %s", err.Error())
		return nil, fmt.Errorf("Fallo al leer comentarios, con error: %s", err.Error())
	}

	jsonComentarios, err := json.Marshal(comentarios)
	if err != nil {
		log.Printf("Fallo al leer comentarios, con error: %s", err.Error())
		return nil, fmt.Errorf("Fallo al leer comentarios, con error: %s", err.Error())
	}
	return jsonComentarios, nil
}

func (c *Controller) ListarComentarios2(id int) ([]byte, error) {
	comentarios, _, err := c.repo.List(context.Background(), listQuery2, 10, id)
	if err != nil {
		log.Printf("Fallo al leer comentarios, con error: %s", err.Error())
		return nil, fmt.Errorf("Fallo al leer comentarios, con error: %s", err.Error())
	}

	jsonComentarios, err := json.Marshal(comentarios)
	if err != nil {
		log.Printf("Fallo al leer comentarios, con error: %s", err.Error())
		return nil, fmt.Errorf("Fallo al leer comentarios, con error: %s", err.Error())
	}
	return jsonComentarios, nil
}

func (c *Controller) TraerComentario(id string) ([]byte, error) {
	comentario, err := c.repo.Read(context.Background(), readQuery, id)
	if err != nil {
		log.Printf("Fallo al leer comentarios, con error: %s", err.Error())
		return nil, fmt.Errorf("Fallo al leer comentarios, con error: %s", err.Error())
	}

	jsonComentario, err := json.Marshal(comentario)
	if err != nil {
		log.Printf("Fallo al leer comentarios, con error: %s", err.Error())
		return nil, fmt.Errorf("Fallo al leer comentarios, con error: %s", err.Error())
	}
	return jsonComentario, nil
}

func (c *Controller) CrearComentario(body []byte) (int64, error) {
	nuevoComentario := &models.Comentario{}
	err := json.Unmarshal(body, nuevoComentario)
	if err != nil {
		log.Printf("Fallo al crear un nuevo comentario, con error: %s", err.Error())
		return 0, fmt.Errorf("Fallo al crear un nuevo comentario, con error: %s", err.Error())
	}

	valoresColumnas := map[string]any{
		"time":      nuevoComentario.TimeStamp,
		"comment":   nuevoComentario.Comment,
		"reactions": nuevoComentario.Reactions,
	}

	nuevoId, err := c.repo.Create(context.Background(), crearQuery, valoresColumnas)
	if err != nil {
		log.Printf("Fallo al crear un nuevo comentario, con error: %s", err.Error())
		return 0, fmt.Errorf("Fallo al crear un nuevo comentario, con error: %s", err.Error())
	}

	return nuevoId, nil
}

func (c *Controller) CrearUsuario(body []byte) (int64, error) {
	nuevoUsuario := &models.Usuario{}
	err := json.Unmarshal(body, nuevoUsuario)
	if err != nil {
		log.Printf("Fallo al crear un nuevo comentario, con error: %s", err.Error())
		return 0, fmt.Errorf("Fallo al crear un nuevo comentario, con error: %s", err.Error())
	}

	valoresColumnas := map[string]any{
		"documento":        nuevoUsuario.Documento,
		"contrasena":       nuevoUsuario.Contrasena,
		"nombres":          nuevoUsuario.Nombres,
		"apellidos":        nuevoUsuario.Apellidos,
		"celular":          nuevoUsuario.Celular,
		"fecha_nacimiento": nuevoUsuario.FechaNacimiento,
		"sexo":             nuevoUsuario.Sexo,
		"correo":           nuevoUsuario.Correo,
	}

	nuevoId, err := c.repo.Create(context.Background(), crearQueryUser, valoresColumnas)
	if err != nil {
		log.Printf("Fallo al crear un nuevo comentario, con error: %s", err.Error())
		return 0, fmt.Errorf("Fallo al crear un nuevo comentario, con error: %s", err.Error())
	}

	return nuevoId, nil
}

func (c *ControllerUser) ReadUsuario(body []byte) (int64, error) {
	credenciales := struct {
		Correo     string `json:"correo"`
		Contrasena string `json:"contrasena"`
	}{}
	err := json.Unmarshal(body, &credenciales)
	if err != nil {
		log.Printf("Fallo, con error: %s", err.Error())
		return 0, fmt.Errorf("Fallo, con error: %s", err.Error())
	}

	usuario, err := c.repo.Read(context.Background(), iniciarSesion, credenciales.Correo)
	if err != nil {
		log.Printf("Fallo al consultar usuario, con error: %s", err.Error())
		return 0, fmt.Errorf("Fallo al consultar usuario, con error: %s", err.Error())
	}

	if usuario == nil || usuario.Contrasena != credenciales.Contrasena {
		return 0, nil
	}

	return 1, nil
}

func (c *ControllerUser) ReadUsuario2(body []byte) (int64, error) {
	credenciales := struct {
		Correo string `json:"correo"`
	}{}
	err := json.Unmarshal(body, &credenciales)
	if err != nil {
		log.Printf("Fallo, con error: %s", err.Error())
		return 0, fmt.Errorf("fallo, con error: %s", err.Error())
	}

	usuario, err := c.repo.Read(context.Background(), iniciarSesion, credenciales.Correo)
	if err != nil {
		log.Printf("Fallo al consultar usuario, con error: %s", err.Error())
		return 0, fmt.Errorf("fallo al consultar usuario, con error: %s", err.Error())
	}

	if usuario == nil {
		return 0, nil
	}

	return 1, nil
}

func (c *Controller) ActualizarComentario(body []byte, id string) error {
	valoresActualizarBody := make(map[string]any)
	err := json.Unmarshal(body, &valoresActualizarBody)
	if err != nil {
		log.Printf("Fallo al actualizar comentario, con error: %s", err.Error())
		return fmt.Errorf("fallo al actualizar comentario, con error: %s", err.Error())
	}

	if len(valoresActualizarBody) == 0 {
		log.Printf("Fallo al actualizar comentario, con error: no hay datos en el body")
		return fmt.Errorf("fallo al actualizar comentario, con error: no hay datos en el body")
	}
	updtQuery := fmt.Sprintf(updateQuery, buildUpdateQuery(valoresActualizarBody))
	valoresActualizarBody["id"] = id
	err = c.repo.Update(context.Background(), updtQuery, valoresActualizarBody)
	if err != nil {
		log.Printf("Fallo al actualizar comentario, con error: %s", err.Error())
		return fmt.Errorf("fallo al actualizar comentario, con error: %s", err.Error())
	}
	return nil
}

func buildUpdateQuery(columnasActualizar map[string]any) string {
	columnas := []string{}
	for key := range columnasActualizar {
		columnas = append(columnas, fmt.Sprintf("%s=:%s", key, key))
	}
	columnasString := strings.Join(columnas, ",")
	return columnasString
}

func (c *Controller) EliminarComentario(id string) error {
	err := c.repo.Delete(context.Background(), deleteQuery, id)
	if err != nil {
		log.Printf("Fallo al eliminar comentarios, con error: %s", err.Error())
		return fmt.Errorf("Fallo al eliminar comentarios, con error: %s", err.Error())
	}
	return nil
}
