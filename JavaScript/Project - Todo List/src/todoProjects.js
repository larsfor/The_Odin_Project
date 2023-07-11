let projectNumber = 0;

const newProject = (projectName) => { 
    projectNumber++;
    
    return { projectName, projectNumber };
}   

const todoProjects = () => {
    const defaultProject = newProject('Default Projects');
    const todoProjects = [defaultProject];

    return todoProjects;
}

export { todoProjects, newProject };