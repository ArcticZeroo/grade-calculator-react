export default class Assignment {
    public readonly totalPoints: number;
    public readonly earnedPoints: number;

    public get percentage(): number {
        return this.earnedPoints / this.totalPoints;
    }

    constructor({ totalPoints = 0, earnedPoints = 0 } : { totalPoints?: number, earnedPoints?: number } ) {
        this.earnedPoints = earnedPoints;
        this.totalPoints = totalPoints;
    }
}