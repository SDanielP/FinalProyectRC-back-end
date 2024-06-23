const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require("cors");
const connectDB = require('./config/db');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRouter');
const subcategoriesRouter = require('./routes/subcategoryRouter'); // Importa las rutas de subcategorías

dotenv.config();
const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

const port = process.env.PORT;


//routes
app.use('/api/auth', authRouter)
app.use('/', userRouter)
app.use('/', productRouter);
app.use('/', subcategoriesRouter)


connectDB();

console.log(port);
app.listen(port, ()=>{
    console.log('app corriendo en el puerto: ', port);
})



// ***** Otra opción para llamar a la base de datos ***** */
// Conecta a la base de datos antes de iniciar el servidor
// connectDB()
//     .then(() => {
//         console.log('Conectado a la base de datos de MongoDB');

//         // Rutas
//         app.use('/', userRouter);
//         app.use('/', productRouter);
//         app.use('/api/auth', authRouter);
//         app.use('/', subcategoriesRouter); // Añade las rutas de subcategorías

//         app.use((req, res, next) => {
//             res.status(404).json({ message: 'Ruta no encontrada' });
//         });

//         app.listen(port, () => {
//             console.log(`App corriendo en el puerto: ${port}`);
//         });
//     })
//     .catch(err => {
//         console.error('Error conectando a la base de datos:', err.message);
//     });
