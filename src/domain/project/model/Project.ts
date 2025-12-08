export class Project {

    public name: string
    public gridImageUrl: string
    public isGridVertical: boolean
    public completedYear: number

    constructor(
        name: string,
        gridImageUrl: string,
        isGridVertical: boolean,
        completedYear: number,
    ) {
        this.name = name
        this.gridImageUrl = gridImageUrl
        this.isGridVertical = isGridVertical
        this.completedYear = completedYear
    }
}
