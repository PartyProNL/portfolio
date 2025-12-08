import {Contentful} from "../../contentful/Contentful.ts";
import type {Project} from "../../domain/project/model/Project.ts";

export class ProjectDataSource {

    private contentful = new Contentful()

    public getProjects(): Project[] {
        return this.contentful.getProjects()
    }
}
