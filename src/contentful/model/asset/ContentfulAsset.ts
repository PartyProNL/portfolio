export abstract class ContentfulAsset {

    public id: string

    protected constructor(
        id: string,
    ) {
        this.id = id
    }
}
