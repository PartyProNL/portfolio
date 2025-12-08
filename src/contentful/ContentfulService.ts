export class ContentfulService {

    private SPACE_ID = "5gvqa27i6a4g"
    private ENVIRONMENT = "master"
    private TOKEN = "K4epd_yEJY7l4xZTNUs2HXvS_bcJYcV6KbRR7JoNv04"

    private CONTENTFUL_URL = `https://cdn.contentful.com/spaces/${this.SPACE_ID}/environments/${this.ENVIRONMENT}/entries?access_token=${this.TOKEN}&limit=1000`

    public async getEntries(): Promise<any> {
        const response = await fetch(this.CONTENTFUL_URL)
        return await response.json()
    }
}
