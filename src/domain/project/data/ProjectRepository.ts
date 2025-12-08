import type {Project} from "../model/Project.ts";
import {ProjectDataSource} from "../../../data/project/ProjectDataSource.ts";

export class ProjectRepository {

    private dataSource = new ProjectDataSource()

    public getProjects(): Project[] {
        return this.dataSource.getProjects()
    }
}
