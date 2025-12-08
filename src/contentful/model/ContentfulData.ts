import type {Project} from "../../domain/project/model/Project.ts";

export class ContentfulData {

    public projects: Project[]

    constructor(
        projects: Project[],
    ) {
        this.projects = projects
    }
}
