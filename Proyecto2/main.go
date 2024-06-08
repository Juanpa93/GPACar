package main

import (
	"log"
	"net/http"

	gorillaMux "github.com/gorilla/mux"
	"github.com/jmoiron/sqlx"
	"github.com/juanpa93/Proyecto1/controllers"
	"github.com/juanpa93/Proyecto1/handlers"
	"github.com/juanpa93/Proyecto1/models"
	"github.com/juanpa93/Proyecto1/repository"
	_ "github.com/lib/pq"
)

func main() {
	conn, err := ConectarDB("database-1.cvscqwywqe47.us-east-2.rds.amazonaws.com", "postgres")
	if err != nil {
		log.Fatalln("Fallo al conectar a la bd", err.Error())
		return
	}
	bd, err := repository.NewRepository[models.Comentario](conn)
	if err != nil {
		log.Fatalln("Fallo al crear una instancia", err.Error())
		return
	}

	bd2, err := repository.NewRepository[models.Usuario](conn)
	if err != nil {
		log.Fatalln("Fallo al crear una instancia", err.Error())
		return
	}

	controller, err := controllers.NewController(bd)
	if err != nil {
		log.Fatalln("Fallo al crear controlador", err.Error())
		return
	}

	controllerUser, err := controllers.NewControllerUser(bd2)
	if err != nil {
		log.Fatalln("Fallo al crear controlador", err.Error())
		return
	}

	handler, err := handlers.NewHandlerComentarios(controller)

	if err != nil {
		log.Fatalln("Fallo al crear instancia de Handler", err.Error())
		return
	}

	handlerUser, err2 := handlers.NewHandlerUsuarios(controllerUser)
	if err2 != nil {
		log.Fatalln("Fallo al crear instancia de Handler", err.Error())
		return
	}

	r := gorillaMux.NewRouter()

	// Middleware para CORS
	r.Use(func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Access-Control-Allow-Origin", "*")
			w.Header().Set("Access-Control-Allow-Methods", "GET,HEAD,POST,PUT,DELETE,OPTIONS")
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type,Authorization")
			if r.Method == "OPTIONS" {
				w.WriteHeader(http.StatusOK)
				return
			}
			next.ServeHTTP(w, r)
		})
	})

	// Registra las rutas en el enrutador r
	r.HandleFunc("/posts", handler.ListarComentarios()).Methods("GET")
	r.HandleFunc("/registro", handler.CrearUsuario()).Methods("POST")
	r.HandleFunc("/posts", handler.CrearComentario()).Methods("POST")
	r.HandleFunc("/iniciar", handlerUser.IniciarSesion()).Methods("POST")
	r.HandleFunc("/validacion", handlerUser.ConsultarCorreo()).Methods("POST")
	r.HandleFunc("/posts/{id}", handler.TraerComentario()).Methods("GET")
	r.HandleFunc("/posts2/{id}", handler.ListarComentarios2()).Methods("GET")
	r.HandleFunc("/posts/{id}", handler.ActualizarComentario()).Methods("PATCH")
	r.HandleFunc("/posts/{id}", handler.EliminarComentario()).Methods("DELETE")

	log.Fatal(http.ListenAndServe(":8081", r))
}

func ConectarDB(url, driver string) (*sqlx.DB, error) {
	/*user := "postgres"
	password := "SQL2024**"
	host := url
	port := 5432
	dbname := "postgres"*/

	//pgUrl := fmt.Sprintf("postgres://%s:%s@%s:%d/%s?sslmode=disable", user, password, host, port, dbname)
	connStr := "postgres://postgres.cmrpltvicqtfyevfqumk:proyecto_prueba@aws-0-us-west-1.pooler.supabase.com:6543/postgres"
	db, err := sqlx.Connect(driver, connStr) // driver: postgres
	if err != nil {
		log.Printf("fallo la conexion a PostgreSQL, error: %s", err.Error())
		return nil, err
	}

	log.Printf("Nos conectamos bien a la base de datos db: %#v", db)
	return db, nil
}
