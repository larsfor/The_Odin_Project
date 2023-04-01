let projectNumber = 0;

const todoProjects = () => {
    const defaultProject = newProject('Default Projects');
    const todoProjects = [defaultProject];

    return todoProjects;
}

const newProject = (projectName) => { 
    projectNumber++;
    return { projectName, projectNumber };
}   

export {todoProjects, newProject};