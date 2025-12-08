import {Contentful} from "../../contentful/Contentful.ts";

export class ContentDataSource {

    private contentful = new Contentful()

    public async sync() {
        await this.contentful.sync()
    }
}
