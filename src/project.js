class Project {
  constructor({name, list}){
    this.name = name;
    this.list = list;
  }
}
const projectModule = (() =>{

  let myProjects = [];

  const createProject = (projectObj) => {
    myProjects.push(new Project(projectObj));
  }
  
  const removeProject = (projectIndex) => {
    myProjects.splice(projectIndex, 1);
  }
  
  const updateProject = (projectObj, newProjectObj) => {
    projectObj = newProjectObj;
  }

  const getListOfProjects = ()=>{
    return myProjects;
  }

  return {
    createProject,
    removeProject,
    updateProject,
    getListOfProjects
  }
})();

export {projectModule as default };