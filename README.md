## Aplicacion de tareas desarrollada en Node.

# Install app:
npm install

# Commands:

Listar tareas:
node app listar

Agregar tarea:
node app crear -d "descripcion de la tarea" -c false

Borrar tarea:
node app borrar -d "Descripcion exacta de la tarea"

Actualizar tarea:
node app actualizar -d "descripcion nueva de la tarea" -c true

# Parametros:
-d : Descripcion
-c: estado (true/false)