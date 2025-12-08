import type {Project} from "./model/Project.ts";
import {ProjectRepository} from "./data/ProjectRepository.ts";

export class GetProjects {

    private repository = new ProjectRepository()

    public invoke(): Project[] {
        return this.repository.getProjects()
            .sort((a, b) => a.completedYear - b.completedYear)
    }
}
