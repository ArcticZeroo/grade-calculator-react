import Assignment from '../Assignment';
import IGradeData from './IGradeData';

export default class GradeComponent {
    public readonly dropCount: number;
    public readonly assignments: Assignment[];

    getDroppedAssignments() : Assignment[] {
        if (!this.dropCount || !this.assignments.length) {
            return [];
        }

        if (this.assignments.length <= this.dropCount) {
            return this.assignments;
        }

        const sortedAssignments: Assignment[] = this.assignments.slice(0);

        sortedAssignments.sort((assignmentA, assignmentB) => assignmentA.percentage - assignmentB.percentage);

        return sortedAssignments.slice(0, this.dropCount);
    }
    getAssignmentsAfterDrop(): Assignment[] {
        const assignments = this.assignments.slice(0);

        const droppedAssignments = this.getDroppedAssignments();

        for (const droppedAssignment of droppedAssignments) {
            assignments.splice(assignments.indexOf(droppedAssignment), 1);
        }

        return assignments;
    }

    public get gradeAfterDrops() : IGradeData {
        const assignmentsAfterDrop = this.getAssignmentsAfterDrop();

        if (!assignmentsAfterDrop.length) {
            return { earnedPoints: 1, totalPoints: 1 };
        }

        let totalPoints: number = 0;
        let earnedPoints: number = 0;

        for (const assignment of assignmentsAfterDrop) {
            totalPoints += assignment.totalPoints;
            earnedPoints += assignment.earnedPoints;
        }

        return { totalPoints, earnedPoints };
    }
}