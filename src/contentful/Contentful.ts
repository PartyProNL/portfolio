import type {Project} from "../domain/project/model/Project.ts";
import {ContentfulCache} from "./ContentfulCache.ts";
import {ContentfulService} from "./ContentfulService.ts";
import {ContentfulMapper} from "./mapper/ContentfulMapper.ts";

export class Contentful {

    private service = new ContentfulService()
    private mapper = new ContentfulMapper()

    public async sync() {
        const result = await this.service.getEntries()
        ContentfulCache.data = this.mapper.map(result)
    }

    public getProjects(): Project[] {
        return ContentfulCache.data.projects
    }
}
