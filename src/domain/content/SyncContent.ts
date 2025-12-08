import {ContentRepository} from "./data/ContentRepository.ts";

export class SyncContent {

    private repository = new ContentRepository()

    public async invoke() {
        await this.repository.sync()
    }
}
