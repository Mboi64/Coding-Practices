const projectStatus = {
  PENDING: {
    description: "Pending Execution",
  },
  SUCCESS: {
    description: "Executed Successfully",
  },
  FAILURE: {
    description: "Execution Failed",
  },
};

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(projectIdea) {
    this.ideas.push(projectIdea);
  }

  unpin() {
    if (this.count() < 0) {
      return undefined;
    }
    this.ideas.pop();
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    let result = ``;
    this.ideas.forEach((project) => {
      result += `${project.title} (${project.status.description}) - ${project.description}\n`;
    });
    return `${this.title} has ${this.count()} idea(s)\n${result}`;
  }
}

const hello = new ProjectIdea(
  "Smart Home System",
  "An integrated system to control lighting, temperature, and security devices remotely.",
);
const techProjects = new ProjectIdeaBoard("Tech Projects Board");

techProjects.pin(hello);

console.log(techProjects.formatToString());
