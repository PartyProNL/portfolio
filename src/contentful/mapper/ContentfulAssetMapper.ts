import {ContentfulAsset} from "../model/asset/ContentfulAsset.ts";
import {ContentfulImage} from "../model/asset/ContentfulImage.ts";

export class ContentfulAssetMapper {

    public mapAssets(response: any): ContentfulAsset[] {
        return response.includes.Asset.map((it: any) => {
            return this.mapAsset(it)
        })
    }

    private mapAsset(assetResponse: any): ContentfulAsset {
        switch (assetResponse.fields.file.contentType) {
            case "image/png":
                return this.mapImage(assetResponse)

            default:
                throw new Error("Unknown asset type")
        }
    }

    private mapImage(assetResponse: any): ContentfulImage {
        return new ContentfulImage(
            assetResponse.sys.id,
            assetResponse.fields.file.url,
        )
    }
}
