const fs = require('fs').promises
const path = require('path');


class Courses{
    async find(criteria= () => true){

        const coursePath = path.join(__dirname, "gened.json")
        const courses = await fs.promise.readfile(coursePath)
        return JSON.parse(courses).filter(criteria)


    }
}


module.exports = new Courses()