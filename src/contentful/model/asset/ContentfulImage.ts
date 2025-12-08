import {ContentfulAsset} from "./ContentfulAsset.ts";

export class ContentfulImage extends ContentfulAsset {

    public url: string

    constructor(
        id: string,
        url: string,
    ) {
        super(id)
        this.url = url
    }
}
