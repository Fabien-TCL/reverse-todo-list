const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require("./routes/tasks");
const cors = require('cors');

const app = express();

// Useless Comment 2
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URL || "mongodb+srv://fabien:-Fa53}Tu06@cluster0.cka2y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
