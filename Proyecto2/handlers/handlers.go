package handlers

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"strconv"

	"github.com/juanpa93/Proyecto1/controllers"
)

type HandlerComentarios struct {
	controller *controllers.Controller
}

func NewHandlerComentarios(controller *controllers.Controller) (*HandlerComentarios, error) {
	if controller == nil {
		return nil, fmt.Errorf("Para instanciar un handler se necesita un controlador no nulo")
	}
	return &HandlerComentarios{
		controller: controller,
	}, nil
}

type HandlerUsuarios struct {
	controller *controllers.ControllerUser
}

func NewHandlerUsuarios(controller *controllers.ControllerUser) (*HandlerUsuarios, error) {
	if controller == nil {
		return nil, fmt.Errorf("Para instanciar un handler se necesita un controlador no nulo")
	}
	return &HandlerUsuarios{
		controller: controller,
	}, nil
}

func (hc *HandlerComentarios) ListarComentarios() http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		//w.Write([]byte("respondiendo a la peticion GET"))
		comentarios, err := hc.controller.ListarComentarios()
		if err != nil {
			http.Error(w, "fallo al leer comentarios", http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(comentarios)
	})
}

func (hc *HandlerComentarios) ListarComentarios2() http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		//w.Write([]byte("respondiendo a la peticion GET"))

		id := r.PathValue("id")
		//io.WriteString(w, fmt.Sprintf("id: %s", id))
		if id == "" {
			http.Error(w, "no se encontro id valido", http.StatusBadRequest)
			return
		}
		idInt, err := strconv.Atoi(id)
		if err != nil {
			http.Error(w, "no se encontro id valido", http.StatusBadRequest)
			return
		}

		comentarios, err := hc.controller.ListarComentarios2(idInt)
		if err != nil {
			http.Error(w, "fallo al leer comentarios", http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(comentarios)
	})
}

func (hc *HandlerComentarios) TraerComentario() http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		//w.Write([]byte("respondiendo a la peticion GET"))
		id := r.PathValue("id")
		//io.WriteString(w, fmt.Sprintf("id: %s", id))
		if id == "" {
			http.Error(w, "no se encontro id valido", http.StatusBadRequest)
			return
		}
		_, err := strconv.Atoi(id)
		if err != nil {
			http.Error(w, "no se encontro id valido", http.StatusBadRequest)
			return
		}

		comentario, err := hc.controller.TraerComentario(id)
		if err != nil {
			log.Printf("fallo al leer un comentario, con error: %s", err.Error())
			http.Error(w, "fallo al leer un nuevo comentario", http.StatusBadRequest)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(comentario)

	})
}

func (hc *HandlerComentarios) CrearComentario() http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		body, err := io.ReadAll(r.Body)
		if err != nil {
			log.Printf("fallo al crear un comentario, con error: %s", err.Error())
			http.Error(w, "fallo al crear un nuevo comentario", http.StatusBadRequest)
			return
		}

		nuevoId, err := hc.controller.CrearComentario(body)
		if err != nil {
			log.Printf("fallo al crear un comentario, con error: %s", err.Error())
			http.Error(w, "fallo al crear un nuevo comentario", http.StatusBadRequest)
			return
		}
		w.WriteHeader(http.StatusCreated)
		io.WriteString(w, fmt.Sprintf("id del nuevo comentario: %d", nuevoId))
	})
}

func (hc *HandlerComentarios) CrearUsuario() http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		body, err := io.ReadAll(r.Body)
		if err != nil {
			log.Printf("fallo al crear un comentario, con error: %s", err.Error())
			http.Error(w, "fallo al crear un nuevo comentario", http.StatusBadRequest)
			return
		}

		nuevoId, err := hc.controller.CrearUsuario(body)
		if err != nil {
			log.Printf("fallo al crear un comentario, con error: %s", err.Error())
			http.Error(w, "fallo al crear un nuevo comentario", http.StatusBadRequest)
			return
		}
		w.WriteHeader(http.StatusCreated)
		io.WriteString(w, fmt.Sprintf("usuario creado: %d", nuevoId))
	})
}

func (hc *HandlerUsuarios) IniciarSesion() http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		body, err := io.ReadAll(r.Body)
		if err != nil {
			log.Printf("fallo al crear un comentario, con error: %s", err.Error())
			http.Error(w, "fallo al crear un nuevo comentario", http.StatusBadRequest)
			return
		}

		nuevoId, err := hc.controller.ReadUsuario(body)
		if err != nil {
			log.Printf("fallo al crear un comentario, con error: %s", err.Error())
			http.Error(w, "fallo al crear un nuevo comentario", http.StatusBadRequest)
			return
		}
		w.WriteHeader(http.StatusCreated)
		io.WriteString(w, fmt.Sprintf("exito: %d", nuevoId))
	})
}

func (hc *HandlerUsuarios) ConsultarCorreo() http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		body, err := io.ReadAll(r.Body)
		if err != nil {
			log.Printf("fallo al crear un comentario, con error: %s", err.Error())
			http.Error(w, "fallo al crear un nuevo comentario", http.StatusBadRequest)
			return
		}

		nuevoId, err := hc.controller.ReadUsuario2(body)
		if err != nil {
			log.Printf("fallo: %s", err.Error())
			http.Error(w, "Usuario no existe", http.StatusOK)
			return
		}
		w.WriteHeader(http.StatusCreated)
		io.WriteString(w, fmt.Sprintf("user: %d", nuevoId))
	})
}

func (hc *HandlerComentarios) ActualizarComentario() http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		id := r.PathValue("id")
		//io.WriteString(w, fmt.Sprintf("id: %s", id))
		if id == "" {
			http.Error(w, "no se encontro id valido", http.StatusBadRequest)
			return
		}
		_, err := strconv.Atoi(id)
		if err != nil {
			http.Error(w, "no se encontro id valido", http.StatusBadRequest)
			return
		}

		body, err := io.ReadAll(r.Body)
		if err != nil {
			log.Printf("fallo al actualizar un comentario, con error: %s", err.Error())
			http.Error(w, "fallo al actualizar un nuevo comentario", http.StatusBadRequest)
			return
		}

		err = hc.controller.ActualizarComentario(body, id)
		if err != nil {
			log.Printf("fallo al actualizar un comentario, con error: %s", err.Error())
			http.Error(w, "fallo al actualizar un nuevo comentario", http.StatusBadRequest)
			return
		}
		w.WriteHeader(http.StatusOK)
	})
}

func (hc *HandlerComentarios) EliminarComentario() http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		id := r.PathValue("id")
		//io.WriteString(w, fmt.Sprintf("id: %s", id))
		if id == "" {
			http.Error(w, "no se encontro id valido", http.StatusBadRequest)
			return
		}
		_, err := strconv.Atoi(id)
		if err != nil {
			http.Error(w, "no se encontro id valido", http.StatusBadRequest)
			return
		}

		err = hc.controller.EliminarComentario(id)
		if err != nil {
			log.Printf("fallo al eliminar un comentario, con error: %s", err.Error())
			http.Error(w, "fallo al eliminar un nuevo comentario", http.StatusInternalServerError)
			return
		}
		w.WriteHeader(http.StatusOK)
	})
}
