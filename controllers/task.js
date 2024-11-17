const Task = require("../models/taskModel");

const getAllTasks = async (req, res) => {
    try {
        const allTasks = await Task.find().sort({ createdAt: -1 });
        res.json({allTasks, totalTasks: allTasks.length});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
};

const uploadTask = async (req, res) => {

    try {
        const taskObj = req.body;
        taskObj.isCompleted = false;
        taskObj.isEditing = false;
        await Task.create(taskObj)

        res.status(200).json({ redirect: "/alltasks", taskStatus: "Added!" });  // Respond with JSON to trigger front-end redirection
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
  
};

const updateTask = async (req, res) => {

    try { 
        const taskId = req.query.id;
        const updatedTask = req.body;
        // console.log(taskId, updatedTask)
        const task = await Task.findByIdAndUpdate(taskId, updatedTask)
        if(!task) {
            return res.status(500).json({msg: `No task with id : ${id}`})
        }
        res.json({ redirect: "/alltasks" });
        
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

const deleteTask = async (req, res) => {
    try {
        const id = req.query.id;
        const task = await Task.findByIdAndDelete(id);

        if(!task) {
            return res.status(500).json({msg: `No task with id : ${id}`})
        }

        res.send({redirect: "/alltasks"})
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

module.exports = {
    getAllTasks,
    uploadTask,
    updateTask,
    deleteTask
}