export class MGeolocation{
    address: string;
    lonAndLat: string;
    constructor(address: string, lonAndLat: string){
        this.address = address;
        this.lonAndLat = lonAndLat;
    }

    static getDefault(): MGeolocation
    {
        return new MGeolocation(
            " ",
            " "
        );
    }
}
