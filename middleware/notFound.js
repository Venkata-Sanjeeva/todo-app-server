const notFound = (req, res) => {
    res.status(404).json({ msg: "Sorry, There is no page which you are looking for!"})
}

module.exports = notFound