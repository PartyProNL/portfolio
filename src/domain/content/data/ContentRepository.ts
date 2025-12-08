import {ContentDataSource} from "../../../data/content/ContentDataSource.ts";

export class ContentRepository {

    private dataSource = new ContentDataSource()

    public async sync() {
        await this.dataSource.sync()
    }
}
