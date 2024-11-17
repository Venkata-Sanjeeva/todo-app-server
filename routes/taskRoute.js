const express = require("express")

const router = express.Router();

const {
    getAllTasks,
    uploadTask,
    updateTask,
    deleteTask
} = require("../controllers/task")

router.get("/alltasks", getAllTasks)
router.post("/upload/task", uploadTask)
router.put("/update/task", updateTask)
router.delete("/delete/task", deleteTask)

module.exports = router;