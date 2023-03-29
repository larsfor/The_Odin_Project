const todoProjects = () => {
    const newProject = (projectName) => { 
        let projectNumber = 0;
        projectNumber++;
        return { projectName, projectNumber };
    }    

    const defaultProject = newProject('Default Projects');
    const todoProjects = [defaultProject];

    return todoProjects;
}

export default todoProjects;