const courseServices = require('..courses.js')

class courseController{
    async getCoursebySubject(request){
        const subjectCode = courseServices.getCoursesBySubject(request.params.subject);
        return JSON.stringify(await subjectCode);
    }

    async getGenEdCoursesByCategory(request){
        const categoryCode = courseServices.getCoursesByGenEdCategory(request.params.category_code);
        return JSON.stringify(await categoryCode);
    }
}

module.exports = new CourseController();