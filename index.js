import Express from 'express';
import Cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './src/model/database.js';
import rutasProducto from './src/router/productos/rutas.productos.js';
import rutasVentas from './src/router/ventas/rutas.ventas.js';
import rutasUsuario from './src/router/usuarios/rutas.usuarios.js';


//Nos permite usar los archivos .env para tener las rutas en otro lado no visibles en el repo
dotenv.config({ path: './.env' });

const app = Express();

app.use(Express.json());

//Nos permite decirle al servidor que puede recibir peticiones desde cualqueir localizacion, movil, web, etc.
app.use(Cors());


app.use(rutasVentas);
app.use(rutasProducto);
app.use(rutasUsuario);

const principal = () => {
	return app.listen(process.env.PORT, () => {
		console.log(`Trabajando en el puerto ${process.env.PORT}`);
	});
};

connectDatabase(principal);