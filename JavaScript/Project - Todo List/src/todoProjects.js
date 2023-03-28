const todoProjects = () => {
    const defaultProject = newProject('Default Projects');
    const todoProjects = [defaultProject];

    return todoProjects;
}

const newProject = (projectName) => { 
    return { projectName };
}


export default todoProjects;