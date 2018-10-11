"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GradeComponent = /** @class */ (function () {
    function GradeComponent() {
    }
    GradeComponent.prototype.getDroppedAssignments = function () {
        if (!this.dropCount || !this.assignments.length) {
            return [];
        }
        if (this.assignments.length <= this.dropCount) {
            return this.assignments;
        }
        var sortedAssignments = this.assignments.slice(0);
        sortedAssignments.sort(function (assignmentA, assignmentB) { return assignmentA.percentage - assignmentB.percentage; });
        return sortedAssignments.slice(0, this.dropCount);
    };
    GradeComponent.prototype.getAssignmentsAfterDrop = function () {
        var assignments = this.assignments.slice(0);
        var droppedAssignments = this.getDroppedAssignments();
        for (var _i = 0, droppedAssignments_1 = droppedAssignments; _i < droppedAssignments_1.length; _i++) {
            var droppedAssignment = droppedAssignments_1[_i];
            assignments.splice(assignments.indexOf(droppedAssignment), 1);
        }
        return assignments;
    };
    Object.defineProperty(GradeComponent.prototype, "gradeAfterDrops", {
        get: function () {
            var assignmentsAfterDrop = this.getAssignmentsAfterDrop();
            if (!assignmentsAfterDrop.length) {
                return { earnedPoints: 1, totalPoints: 1 };
            }
            var totalPoints = 0;
            var earnedPoints = 0;
            for (var _i = 0, assignmentsAfterDrop_1 = assignmentsAfterDrop; _i < assignmentsAfterDrop_1.length; _i++) {
                var assignment = assignmentsAfterDrop_1[_i];
                totalPoints += assignment.totalPoints;
                earnedPoints += assignment.earnedPoints;
            }
            return { totalPoints: totalPoints, earnedPoints: earnedPoints };
        },
        enumerable: true,
        configurable: true
    });
    return GradeComponent;
}());
exports.default = GradeComponent;
//# sourceMappingURL=GradeComponent.js.map