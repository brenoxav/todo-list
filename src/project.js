class Project {
  constructor({name}){
    this.name = name;
    this.listOfTodos = [];
  }
}
const projectModule = (() =>{

  let projectList = [
    {  
      name: 'work',
      listOfTodos:[
        {  
          title: 'linters',
          description: 'check for linter errors',
          dueDate: '3-4-2021',
          priority: 'low'
        },
        {  
          title: 'tests',
          description: 'check for test errors',
          dueDate: '3-4-2021',
          priority: 'high'
        }
      ]

    },
    {  
      name: 'personal',
      listOfTodos: [
        {  
          title: 'readme',
          description: 'update readme on github',
          dueDate: '2-4-2021',
          priority: 'mid'
        },
      ]
    }
  ];

  const createProject = (projectName) => {
    projectList.push(new Project(projectName));
  }
  
  const removeProject = (projectIndex) => {
    projectList.splice(projectIndex, 1);
  }
  
  const updateProject = (projectObj, newProjectObj) => {
    projectObj = newProjectObj;
  }

  const getProjectList = ()=>{
    return projectList;
  }

  return {
    createProject,
    removeProject,
    updateProject,
    getProjectList
  }
})();

export {projectModule as default };