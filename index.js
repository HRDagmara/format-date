const formatDate = (timeInSeconds) => {
    var timeInHours = Math.floor(timeInSeconds/3600);
    var timeInMinutes = Math.floor(timeInSeconds/60)
    return `${timeInHours}h, ${timeInMinutes} min, ${timeInSeconds}s`;
}

module.exports = formatDate;




